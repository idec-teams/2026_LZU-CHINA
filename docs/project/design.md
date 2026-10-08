---
eyebrow: Research / Design
---

# System design

<p class="page-deck">Read this as a map of the intended system. A proposed module is not automatically an experimentally demonstrated function.</p>

## Proposed signal-to-output path

The manuscript describes an EcN chassis carrying four compatible plasmids. The intended design links two inputs to split T7 RNA polymerase, then uses T7-dependent expression for a colorimetric reporter and a proposed antimicrobial payload. A separate bile-responsive Hok/Sok module is presented as a containment design.

![Figure 2 from the supplied materials showing plasmid maps. The image is reproduced unchanged; promoter assignments in the maps and text do not fully agree.](../img/fig2-plasmid-maps.png){ .wide-figure loading=lazy }

![Diagram of the four-plasmid design described in the supplied manuscript. The promoter assignment for the N-terminal T7 fragment differs among the manuscript text and figures; the AI-2 arm therefore remains to be confirmed from the final construct sequence.](../img/system-overview.svg){ .wide-figure }

## Modules described in the materials

| Module | Components described | Intended role | Evidence boundary |
| --- | --- | --- | --- |
| Tetrathionate sensing | TtrS/TtrR and PttrB | Drive a tetrathionate-responsive transcriptional output | Tetrathionate-associated expression is reported in Fig. 3 using a human β-actin reporter substitution. |
| Quorum-sensing-associated input | AI-2-responsive element in the narrative; *Salmonella* culture filtrate as the assay input | Supply the second input to the proposed logic gate | The files do not provide a purified AI-2 dose-response or a final sequence confirming the promoter assignment. |
| Split-T7 and reporter | T7 RNA polymerase fragments and PT7-lacZ | Reconstitute transcription and produce a colorimetric readout with X-Gal | The cross-induction heatmap is shown in Fig. 4A; total induction and substrate-development time are described as 12 h plus 2 h. |
| Antimicrobial payload | Microcin J25-related sequence and secretion/2A elements are described | Proposed targeted intervention against *Salmonella* | The supplied figures do not directly measure mature peptide, secretion, or peptide-specific killing. |
| Containment | Bile-responsive P16090-sok and constitutive/weak hok transcription are described | Proposed bile-dependent survival switch | The manuscript provides a design rationale but no containment figure, raw counts, detection limit, or escape assay record. |

## Four plasmids as reported

The names and elements below are transcribed from the supplied methods and captions. The full sequences, accession identifiers, and chromatograms were not included with the documents, so construct identity and junctions cannot be independently checked here.

| Plasmid name in the manuscript | Reported components |
| --- | --- |
| `pCL1920-Pcon-T7_N::PttrB-T7_C` | Two split-T7 fragments; the manuscript assigns Pcon to the N-terminal fragment and PttrB to the C-terminal fragment. |
| `pACYC184-Pcon-ttrS-(TC)-ttrR` | Tetrathionate-associated two-component sensor and a translational-coupling element. |
| `pUC19-PT7-lacZ-2A-AMP` | T7 promoter, `lacZ`, and a Microcin J25-related payload described with a 2A/secretion design. |
| `pCDF-P16090-sok::Psod-hok` | Bile-responsive antisense `sok` and `hok` toxin transcript. |

!!! warning "Promoter assignment needs a sequence-level check"
    The narrative describes AI-2 control of one split-T7 fragment. However, the methods and Fig. 2 caption label the N-terminal fragment as Pcon-driven, while the plasmid-map image also appears to show a Pslr label. Fig. 1 depicts Pcon on that arm. These records do not agree. The design drawing on this page marks the AI-2 arm as **unresolved** rather than presenting the molecular AND gate as fully verified. Confirm the final plasmid sequence and promoter before making a stronger claim.

## What the model does and does not show

The diagram is a map of the **intended design**. It is not a quantitative simulation, clinical workflow, or proof that all four plasmids function together in every assay. A color response in the cross-induction experiment supports the reported assay outcome, but the construct discrepancy above limits mechanistic attribution. Likewise, a crystal-violet change does not identify which payload caused the change, and the containment design is not evidence of zero escape.
