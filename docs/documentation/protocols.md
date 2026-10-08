---
eyebrow: Records / Methods
---

# Methods and protocols

<p class="page-deck">Methods are retained as documentation of the supplied study. Consult the original institutional procedures and approved conditions for any laboratory work.</p>

This page summarizes the methods described in the supplied manuscript. It is a transcription of reported methods, not an independently validated standard operating procedure. Work with *Salmonella* and genetically modified bacteria must follow the institution’s approved biosafety procedures and applicable competition rules.

## Strains and culture conditions

The manuscript lists *E. coli* Nissle 1917 as the chassis, *Salmonella enterica* serovar Typhimurium SL1344 as the pathogen model, *E. coli* DH5α as a cloning host, and L-929 mouse fibroblasts for an in-vitro cell assay. Bacterial cultures were described in LB medium at 37°C and 200 rpm; log-phase cultures were diluted 1:100 into fresh medium and used at OD600 0.6–0.8. Engineered strains were maintained with ampicillin (100 µg/mL), chloramphenicol (25 µg/mL), kanamycin (50 µg/mL), spectinomycin (50 µg/mL), and 0.2% sodium cholate. The supplied files do not include strain provenance records or the institutional biosafety approval documentation.

## *Salmonella* culture-filtrate proxy

The manuscript describes growing *Salmonella* in antibiotic-free LB for 48 h, pelleting cells at 8,000 × g for 15 min at 4°C, passing the supernatant through a 0.22 µm filter, checking for viable cells by plating, and storing aliquots at −20°C. The filtrate was used as a mixed soluble input in the induction assay. No direct AI-2 quantification or metabolite profile is supplied.

## Transformation and construct checks

The described EcN competent-cell workflow chilled log-phase culture (OD600 0.4–0.5), washed the pellet three times with pre-chilled ultrapure water, and resuspended it in 10% glycerol for storage at −80°C. The four plasmids were introduced stepwise by electroporation using 100 ng DNA and a 0.1 cm cuvette; the manuscript gives 1.8 kV, 25 µF, and 200 Ω. Recovery was described in SOC containing 0.2% sodium cholate, followed by antibiotic selection. Colony PCR and sequencing are described as checks for plasmid presence. The underlying sequences, chromatograms, and clone-level records were not provided.

## Growth, expression, and functional assays

For the tetrathionate growth assay, the manuscript reports seven concentrations from 0.0 to 1.0‰, 200 µL per well, triplicate wells, and OD600 readings at 0, 2, 4, 8, 12, and 24 h. Plate counts were taken after 24 h; the methods describe triplicate plating. For the reporter test, the T7 C-terminal segment was replaced by human β-actin, and protein signal was assessed by Western blot after 24 h. This β-actin construct is described as a reporter substitution, not a normalization reference.

The cross-induction assay combined the seven tetrathionate conditions with 0%, 5%, 10%, and 20% culture filtrate. After 12 h of co-culture, X-Gal was added for a further 2 h, followed by an OD560 reading. This is a total 14 h assay as written in the methods.

For the biofilm experiment, a 48 h *Salmonella* biofilm was exposed to LB, wild-type EcN, or engineered EcN for 24 h. Crystal violet was then extracted and measured at OD595 as retained biomass. The cell assay used L-929 cells and a 0.4 µm Transwell for 24 h with bacterial groups at MOI 10:1; CCK-8 was read at OD450, and Calcein-AM/PI staining was used for qualitative imaging.

## Assay summary

| Assay | Conditions reported | Readout |
| --- | --- | --- |
| Tetrathionate growth response | 0.0, 0.1, 0.2, 0.4, 0.6, 0.8, and 1.0‰; 96-well growth monitoring over 24 h | OD600 and reported colony counts |
| Tetrathionate-associated expression | Cultures with the tetrathionate gradient; β-actin substituted for the T7 fragment in the PttrB reporter test | Western blot band signal |
| Cross-induction | Seven tetrathionate levels and four filtrate levels; 12 h co-culture, then 2 h with X-Gal | Color and OD560, shown as a heatmap |
| Biofilm biomass | *Salmonella* biofilm formed for 48 h, then exposed to LB, EcN, or engineered EcN for 24 h | Crystal-violet OD595 |
| L-929 assay | Transwell co-culture for 24 h; CCK-8 and Calcein-AM/PI readouts | Relative viability and qualitative live/dead staining |

The manuscript states that quantitative experiments were independently repeated at least three times and reports mean ± SD. It describes two-sided unpaired t-tests for two-group comparisons and one-way ANOVA with Tukey’s post-hoc test for multiple groups. The raw data, exact sample sizes for each panel, full statistical outputs, and analysis files are not included, so these details cannot be independently checked here.

## Source discrepancies to resolve

- Cross-induction methods list 7 × 4 input combinations but say 21 groups; the plotted matrix depicts 28 combinations.
- The paper’s introduction claims a visible result within one hour, while the cross-induction method reports 12 h plus 2 h of substrate development.
- Tetrathionate is labelled in per mille in the figure and methods, but as percent in one results sentence.
- The AI-2-responsive promoter assignment differs between the narrative, figure, and plasmid description. See [System design](../project/design.md).

Use the original dated notebook and construct sequence to resolve these items before treating this summary as a final protocol record.
