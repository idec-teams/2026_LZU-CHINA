/* Scroll is native; the atlas enhances links that also work without JavaScript. */
(() => {
  let release = () => {};
  function initialise() {
    const article = document.querySelector('.md-content__inner');
    if (!article || article.dataset.atlasReady) return;
    release();
    article.dataset.atlasReady = 'true';
    const controller = new AbortController();
    const options = {signal: controller.signal};
    let frame = 0;
    const chapters = [...article.querySelectorAll('[data-chapter]')];
    const steps = [...article.querySelectorAll('[data-selection-step]')];
    const selection = article.querySelector('.selection-layout');
    function renderScroll() {
      frame = 0;
      const length = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty('--reading-progress', length > 0 ? Math.min(1, Math.max(0, scrollY / length)) : 0);
      const current = chapters.filter(node => node.getBoundingClientRect().top <= 180).at(-1);
      article.querySelectorAll('[data-chapter-link]').forEach(link => {
        if (link.dataset.chapterLink === current?.id) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
      if (selection) {
        const active = steps.filter(node => node.getBoundingClientRect().top < innerHeight * .55).at(-1) || steps[0];
        selection.dataset.step = active.dataset.selectionStep;
      }
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(renderScroll); }
    addEventListener('scroll', schedule, {...options, passive:true});
    addEventListener('resize', schedule, options);
    const resize = new ResizeObserver(schedule);
    resize.observe(article);
    renderScroll();
    const search = article.querySelector('[data-atlas-search]');
    if (search) {
      const entries = [...article.querySelectorAll('[data-atlas-entry]')];
      const buttons = [...article.querySelectorAll('[data-atlas-filter]')];
      let category = 'all';
      const filter = () => {
        const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let count = 0;
        entries.forEach(entry => {
          const matches = (category === 'all' || entry.dataset.category === category) && words.every(word => entry.textContent.toLowerCase().includes(word));
          entry.hidden = !matches;
          if (matches) count++;
        });
        article.querySelector('[data-atlas-count]').textContent = `${count} of ${entries.length} paths`;
        article.querySelector('[data-atlas-empty]').hidden = count !== 0;
        buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.atlasFilter === category)));
      };
      search.addEventListener('input', filter, options);
      buttons.forEach(button => button.addEventListener('click', () => {category = button.dataset.atlasFilter; filter();}, options));
      article.querySelector('[data-atlas-reset]').addEventListener('click', () => {category = 'all'; search.value = ''; filter(); search.focus();}, options);
      article.querySelector('.atlas-tools').hidden = false;
      filter();
    }
    release = () => {controller.abort(); resize.disconnect(); cancelAnimationFrame(frame);};
  }
  if (typeof document$ !== 'undefined') document$.subscribe(initialise);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise);
  else initialise();
})();
