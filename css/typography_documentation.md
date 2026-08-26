# Typography

## Naming Convention

Basic convention is the custom double dashes BEM:  `namespace_block-name__element-name--modifier-name--mod-value`

That applied to typography becomes:  `t_element--modifier-name--mod-value`

## Styles

### Body text

*Body text*: used for basic body text

`t_body` basic body text (default = medium size)

*Sizing modifiers*

`.t_body--sz--xs` body text x-small
`.t_body--sz--sm` body text small
`.t_body--sz--md` body text medium
`.t_body--sz--lg` body text large

*Emphasis modifiers*

`.t_body--em--yes` text is emphasized

*Interactive modifiers*

`.t_body--int--link` used for links

### Labels

*Label*: used for element labels (buttons, chips). Font is serif.

`.t_label` basic label (default = medium size)

*Sizing modifiers*

`.t_label--sz--sm` label text small
`.t_label--sz--md` label text medium
`.t)`
`.t_label--sz--lg` label text large

*Interactive modifiers*

`.t_label--int--btn` used for buttons
`.t_label--int--link` used for links

### Titles

*Title*: used for medium emphasis text initiating sections. Font is sans-serif.

`t_title` basic title (default = medium size)

*Sizing modifiers*

`.t_title--sz--sm` label text small
`.t_title--sz--md` label text medium
`.t_title--sz--lg` label text large
`.t_title--sz--xl` label text x-large

*Emphasis modifiers*

`.t_title--em--yes` text is emphasized

### Headlines

*Headline*: used for high emphasis text initiating sections

`t_headline` basic headline (default = medium size)

*Sizing modifiers*

`.t_headline--sz--sm` label text small
`.t_headline--sz--md` label text medium
`.t)`
`.t_headline--sz--lg` label text large

*Emphasis modifiers*

`.t_headline--em--yes` text is emphasized


### Display text

*Display text*: big tipography used for displays.

`.t_display` basic display (default = medium size)

*Sizing modifiers*

`.t_display--sz--md` display text medium
`.t)`

*Emphasis modifiers*

`.t_display--em--yes` text is emphasized

### Paragraph styles

*P - Paragraph*: normal semantic paragraph.

`p` margin applied underneath for spacing paragraphs/elements