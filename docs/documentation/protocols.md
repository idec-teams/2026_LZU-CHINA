---
eyebrow: Records / Methods
---

# Methods and protocols

<p class="page-deck">Our methods cover strain preparation, construct checks and in-vitro assays. Consult the original institutional procedures and approved conditions for any laboratory work.</p>

We used the following methods to characterise the chassis and evaluate the proposed system. This research account is not a validated standard operating procedure. Work with *Salmonella* and genetically modified bacteria must follow the institution’s approved biosafety procedures and applicable competition rules.

## Strains and culture conditions

We used *E. coli* Nissle 1917 as the chassis, *Salmonella enterica* serovar Typhimurium SL1344 as the pathogen model, *E. coli* DH5α as a cloning host, and L-929 mouse fibroblasts for an in-vitro cell assay. Bacterial cultures were grown in LB medium at 37°C and 200 rpm; log-phase cultures were diluted 1:100 into fresh medium and used at OD600 0.6–0.8. Engineered strains were maintained with ampicillin (100 µg/mL), chloramphenicol (25 µg/mL), kanamycin (50 µg/mL), spectinomycin (50 µg/mL), and 0.2% sodium cholate. Strain provenance records and institutional biosafety approval documentation are not yet available in our public research record.

## *Salmonella* culture-filtrate proxy

We prepared the culture-filtrate proxy by growing *Salmonella* in antibiotic-free LB for 48 h, pelleting cells at 8,000 × g for 15 min at 4°C, passing the supernatant through a 0.22 µm filter, checking for viable cells by plating, and storing aliquots at −20°C. The filtrate was used as a mixed soluble input in the induction assay. No direct AI-2 quantification or metabolite profile is available.

## Transformation and construct checks

For competent-cell preparation, we chilled log-phase culture (OD600 0.4–0.5), washed the pellet three times with pre-chilled ultrapure water, and resuspended it in 10% glycerol for storage at −80°C. The four plasmids were introduced stepwise by electroporation using 100 ng DNA and a 0.1 cm cuvette, with settings of 1.8 kV, 25 µF, and 200 Ω. Recovery was performed in SOC containing 0.2% sodium cholate, followed by antibiotic selection. We used colony PCR and sequencing to check plasmid presence. The underlying sequences, chromatograms, and clone-level records are not yet available in our public data record.

## Growth, expression, and functional assays

For the tetrathionate growth assay, we tested seven concentrations from 0.0 to 1.0‰ in triplicate wells with 200 µL per well. We measured OD600 at 0, 2, 4, 8, 12, and 24 h. Plate counts were taken after 24 h; plating was performed in triplicate. For the reporter test, the T7 C-terminal segment was replaced by human β-actin, and protein signal was assessed by Western blot after 24 h. We used this β-actin construct as a reporter substitution, not a normalization reference.

The cross-induction assay combined the seven tetrathionate conditions with 0%, 5%, 10%, and 20% culture filtrate. After 12 h of co-culture, X-Gal was added for a further 2 h, followed by an OD560 reading. The total assay duration was 14 h.

For the biofilm experiment, a 48 h *Salmonella* biofilm was exposed to LB, wild-type EcN, or engineered EcN for 24 h. Crystal violet was then extracted and measured at OD595 as retained biomass. The cell assay used L-929 cells and a 0.4 µm Transwell for 24 h with bacterial groups at MOI 10:1; CCK-8 was read at OD450, and Calcein-AM/PI staining was used for qualitative imaging.

## Assay summary

| Assay | Assay conditions | Readout |
| --- | --- | --- |
| Tetrathionate growth response | 0.0, 0.1, 0.2, 0.4, 0.6, 0.8, and 1.0‰; 96-well growth monitoring over 24 h | OD600 and colony counts |
| Tetrathionate-associated expression | Cultures with the tetrathionate gradient; β-actin substituted for the T7 fragment in the PttrB reporter test | Western blot band signal |
| Cross-induction | Seven tetrathionate levels and four filtrate levels; 12 h co-culture, then 2 h with X-Gal | Color and OD560, shown as a heatmap |
| Biofilm biomass | *Salmonella* biofilm formed for 48 h, then exposed to LB, EcN, or engineered EcN for 24 h | Crystal-violet OD595 |
| L-929 assay | Transwell co-culture for 24 h; CCK-8 and Calcein-AM/PI readouts | Relative viability and qualitative live/dead staining |

We independently repeated quantitative experiments at least three times and expressed results as mean ± SD. We used two-sided unpaired t-tests for two-group comparisons and one-way ANOVA with Tukey’s post-hoc test for multiple groups. Raw data, exact sample sizes for each panel, full statistical outputs and analysis files are not yet available in our public data record for independent verification.

## Documentation checks

- Cross-induction methods list 7 × 4 input combinations but say 21 groups; the plotted matrix depicts 28 combinations.
- An earlier one-hour response statement is inconsistent with our cross-induction workflow of 12 h plus 2 h of substrate development.
- Tetrathionate is labelled in per mille in the figure and methods, but as percent in one results sentence.
- The AI-2-responsive promoter assignment differs between the narrative, figure, and plasmid description. See [System design](../project/design.md).

These points remain to be reconciled with our dated laboratory notebook and final construct sequences.
