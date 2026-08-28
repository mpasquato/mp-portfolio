# Naming system

For grid: specific classes (grid container col-12 etc)

For most elements/component: Custom BEM system

## Custom BEM System

### Basics

Custom double dashes
`namespace_block-name__element-name--modifier-name--mod-value`

### Namespaces

`t`: typography  
`e`: elements  
`c`: components  

### Variants

Size modifier: `--sz`  
Size values: `--xs`, `--sm`, `--md`, `--lg`, `--xl`

Width modifier: `--wd`  
Width values: `--`

Height modifier: `--ht`  
Height values: ``

Emphasis modifier: `--em`  
Emphasis values: `--yes`

Clickable modifier: `--clk`  
Clickable values: `--yes`

Device modifier: `--dv`  
Device values: `--dsk`, `--mob`

Variant (generic) modifier: `--vr`

Type variants, e.g. for buttons, modifier: `--vr`  
Type variants, e.g. for buttons, values: `--primary`, `--secondary`, `--tertiary`