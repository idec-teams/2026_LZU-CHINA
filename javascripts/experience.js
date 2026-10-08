/* Plain-language learning interactions. All values below are illustrative. */
(() => {
 let releaseNavigation = () => {};
 const initialisePage = () => {
  const article = document.querySelector('.md-content__inner');
  if (!article || article.dataset.experienceReady) return;
  article.dataset.experienceReady = 'true';
  releaseNavigation();
  // Follow Material's active heading, but scroll only the visible directory.
  // The duplicate mobile TOC must not receive the desktop scroll operation.
  const controller = new AbortController();
  const observers = [];
  const frames = new Set();
  document.querySelectorAll('.md-sidebar').forEach(sidebar => {
    const wrap = sidebar.querySelector('.md-sidebar__scrollwrap');
    if (!wrap) return;
    let interacting = false;
    const follow = () => {
      if (interacting || !wrap.clientHeight) return;
      const links = [...wrap.querySelectorAll('.md-nav__link--active')];
      const active = links.reverse().find(link => link.getClientRects().length && link.offsetHeight);
      if (!active) return;
      const box = wrap.getBoundingClientRect();
      const item = active.getBoundingClientRect();
      if (item.top < box.top + 48 || item.bottom > box.bottom - 24) {
        wrap.scrollTo({top:wrap.scrollTop + item.top - box.top - box.height * .4,
          behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
      }
    };
    const schedule = () => {
      const frame = requestAnimationFrame(() => { frames.delete(frame); follow(); });
      frames.add(frame);
    };
    wrap.addEventListener('pointerenter', () => {interacting = true;}, {signal:controller.signal});
    wrap.addEventListener('pointerleave', () => {interacting = false; schedule();}, {signal:controller.signal});
    const observer = new MutationObserver(schedule);
    observer.observe(wrap, {subtree:true, attributes:true, attributeFilter:['class']});
    observers.push(observer);
    const resize = new ResizeObserver(schedule);
    resize.observe(wrap);
    observers.push(resize);
    schedule();
  });
  releaseNavigation = () => {
    controller.abort(); observers.forEach(observer => observer.disconnect());
    frames.forEach(frame => cancelAnimationFrame(frame));
  };
  const readTime = document.querySelector('.reading-time');
  if (readTime && article) readTime.textContent = `${Math.max(1, Math.ceil(article.textContent.trim().split(/\s+/).length / 220))} min read`;
  document.querySelectorAll('.js-only').forEach(el => { el.hidden = false; });

  document.querySelectorAll('[data-signal-station]').forEach(station => {
    const buttons = [...station.querySelectorAll('button[data-signal]')];
    const output = station.querySelector('[data-signal-output]');
    const render = () => {
      const [a, b] = buttons.map(button => button.getAttribute('aria-pressed') === 'true');
      const on = a && b;
      output.dataset.active = String(on);
      output.textContent = on ? 'Both inputs are present → output ON in this idealised model.' : 'Output OFF in this idealised model. Both inputs must be present.';
      buttons.forEach(button => { button.textContent = `${button.dataset.signal}: ${button.getAttribute('aria-pressed') === 'true' ? 'present' : 'absent'}`; });
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
      render();
    }));
    render();
  });

  document.querySelectorAll('[data-tradeoff-station]').forEach(station => {
    const slider = station.querySelector('input[type=range]');
    const output = station.querySelector('[data-winner-output]');
    const cards = [...station.querySelectorAll('[data-variant]')];
    const render = () => {
      const weight = Number(slider.value) / 100;
      const scores = cards.map(card => Number(card.dataset.speed) * weight + Number(card.dataset.consistency) * (1 - weight));
      const best = Math.max(...scores);
      const winners = cards.filter((card, i) => Math.abs(scores[i] - best) < .00001);
      cards.forEach((card, i) => {
        card.dataset.winner = String(winners.includes(card));
        card.querySelector('.variant-score').textContent = `Illustrative score: ${scores[i].toFixed(1)}`;
      });
      station.querySelector('[data-weight]').textContent = `${slider.value}% speed · ${100 - Number(slider.value)}% consistency`;
      output.textContent = `For this choice of weights, ${winners.map(card => card.dataset.variant).join(' and ')} ${winners.length > 1 ? 'tie for the highest score' : 'has the highest score'}. Change the goal and the preferred option can change.`;
    };
    slider.addEventListener('input', render);render();
  });
  document.querySelectorAll('[data-quiz]').forEach(quiz => {
    quiz.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      quiz.querySelector('[data-feedback]').textContent = button.dataset.correct === 'true'
        ? 'Exactly. A result needs a defined comparison, appropriate measurements and the conditions under which it holds.'
        : 'Try again. A striking picture or a large score alone cannot tell us whether a change is a meaningful improvement.';
    }));
  });
 };
 // Material replaces the article during instant navigation. Initialise each new
 // article once, including back/forward navigation, without duplicate handlers.
 if (typeof document$ !== 'undefined') document$.subscribe(initialisePage);
 else initialisePage();
})();
