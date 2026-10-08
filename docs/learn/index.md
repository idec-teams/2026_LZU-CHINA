---
eyebrow: 02 / The learning lab
---

# Better—for which goal?

<p class="lead">“Better” sounds like a single destination. In research, it begins with a choice about what matters.</p>

Directed evolution involves variation, selection or screening, and comparison. Different variants can have different properties; the criterion used to evaluate them shapes which ones are carried forward. Our simple exercise below focuses on one part of that reasoning: how a goal changes a ranking.

<figure class="editorial-figure"><img src="../img/cartoon/cartoon-evolution.webp" width="1536" height="1024" alt="A varied group of cartoon microbes branches into two different environments." loading="lazy" decoding="async"><figcaption><strong>Different environments, different advantages</strong><span>AI-generated illustration of variation and environment-dependent selection, not a record of experimental evolution.</span></figcaption></figure>

## Choose what you value

Imagine four abstract designs that differ in speed and consistency. Their scores are invented for teaching and are not biological measurements. Move the slider to change the importance of each property.

<section class="learning-station" data-tradeoff-station aria-labelledby="trade-title">
<div class="station-label">Learning station 02 / Illustrative scores only</div>
<h3 id="trade-title">Same options. A different definition of success.</h3>
<label class="weight-control js-only" hidden for="priority-weight">Weight given to speed <span data-weight>50% speed · 50% consistency</span><input id="priority-weight" type="range" min="0" max="100" step="1" value="50"><span class="weight-labels"><span>Prioritise consistency</span><span>Prioritise speed</span></span></label>
<div class="variant-grid">
<div class="variant-card" data-variant="A" data-speed="95" data-consistency="30"><strong>A</strong><span>Speed 95</span><span>Consistency 30</span><span class="variant-score">Equal-weight score: 62.5</span></div>
<div class="variant-card" data-variant="B" data-speed="76" data-consistency="72"><strong>B</strong><span>Speed 76</span><span>Consistency 72</span><span class="variant-score">Equal-weight score: 74.0</span></div>
<div class="variant-card" data-variant="C" data-speed="50" data-consistency="93"><strong>C</strong><span>Speed 50</span><span>Consistency 93</span><span class="variant-score">Equal-weight score: 71.5</span></div>
<div class="variant-card" data-variant="D" data-speed="35" data-consistency="99"><strong>D</strong><span>Speed 35</span><span>Consistency 99</span><span class="variant-score">Equal-weight score: 67.0</span></div>
</div>
<div class="signal-result" data-winner-output role="status" aria-live="polite">At equal weights, B has the highest illustrative score.</div>
<p class="station-explainer">Score = speed × its weight + consistency × the remaining weight. This example illustrates evaluation, not mutation, selection rounds, biological prediction or a completed evolution experiment.</p>
</section>

## What changed—and what did not?

The options stayed the same. Your evaluation changed. A fast option can become less attractive when consistency matters more. In a real project, the criterion should be tied to a meaningful question and justified before interpreting a result.

This is why a single impressive number is not enough. We need to know the baseline, how the measurement was made, the conditions and whether an advantage comes with a trade-off.

<section class="visual-flow" aria-label="The reasoning behind an evolution cycle"><div class="flow-heading"><span class="eyebrow">Visual guide</span><strong>The reasoning behind an evolution cycle</strong></div><ol class="flow-grid">
<li><div class="flow-symbol"><img src="../img/icons/variation.svg" alt="" width="40" height="40" loading="lazy"><span>01</span></div><h3>Variation</h3><p>Begin with versions that differ.</p></li>
<li><div class="flow-symbol"><img src="../img/icons/compare.svg" alt="" width="40" height="40" loading="lazy"><span>02</span></div><h3>Evaluation</h3><p>Use a clearly defined criterion.</p></li>
<li><div class="flow-symbol"><img src="../img/icons/evidence.svg" alt="" width="40" height="40" loading="lazy"><span>03</span></div><h3>Comparison</h3><p>Check against a reference under comparable conditions.</p></li>
<li><div class="flow-symbol"><img src="../img/icons/learning.svg" alt="" width="40" height="40" loading="lazy"><span>04</span></div><h3>Learning</h3><p>Use the outcome to inform the next cycle.</p></li></ol><p class="flow-note">A general learning framework, not a record of a completed evolution campaign by this team.</p></section>

## The bigger picture: variation → evaluation → learning

| Idea | In plain language | Question to ask |
| --- | --- | --- |
| Variation | There is more than one version to compare | What differs between the versions? |
| Selection or screening | Versions are evaluated against a criterion | Does the criterion match the intended goal? |
| Comparison | Performance is checked against a reference | Are the conditions and measurements comparable? |
| Learning | The outcome informs what happens next | What did we learn, including an unexpected or negative result? |

Our current work focuses on design and engineering. We have not yet established a completed directed-evolution campaign. The [evolution perspective](../project/evolution.md) explains what would be needed to make that claim.

## A quick reflection

<section class="learning-station" data-quiz aria-labelledby="quiz-title">
<h3 id="quiz-title">Which statement best supports an improvement claim?</h3>
<div class="quiz-choices js-only" hidden><button type="button" data-correct="false">The new diagram looks more sophisticated.</button><button type="button" data-correct="true">A defined comparison shows an advantage under stated conditions.</button><button type="button" data-correct="false">The largest number must be the best result.</button></div>
<div class="quiz-feedback" data-feedback role="status" aria-live="polite">Think about the comparison, the measurement and its conditions. Open the explanation below whenever you are ready.</div>
</section>

??? note "Read the explanation"
    A defined comparison under stated conditions is the strongest of these statements. A visual impression cannot substitute for evidence, and a large number has no meaning without its units, baseline and uncertainty.

## Take this conversation into a classroom

Ask learners to write their definition of “better” before showing the options. Compare choices across the group, then invite them to explain what they would measure. This exercise is intended for future teaching sessions and has not yet been used in our outreach programme.

[Our education programme](../human-practices/education.md) · [Project story](../project/story.md) · [Official directed-evolution learning resources](https://wiki.idec.io/)
