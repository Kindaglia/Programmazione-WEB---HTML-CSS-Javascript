## Css-diner Solutions

In this file there are the solutions of exercises.

## 01 Select the plates
Here i used only Element selector
```
plate
```

### 02 Select the bento boxes
Here i used an only Element selector
```
bento
```
## 03 Select the fancy plate
Here i used an only ID selector - most specific
```
#fency
```
## 04 Select the apple on the plate
Here i used the selector with Descendant selector (space)
```
plate apple
```
## 05 Select the pickle on the fancy plate
Here i used two selector, Element selector and ID selector with Descendant selector
```
#fancy plate
```
## 06 Select the small apples
Here i used only Class selector
```
.small
```
## 07 Select the small oranges
Here i used two selector without Relational selectors, (Element selector and Class selector )
```
orange.small
```
## 08 Select the small oranges in the bentos
Here i used three selector, i select (orange.small) in (bento).
```
bento orange.small
```
## 09 Select all the plates and bentos
Here i used two selector with (,), for select 2 element without relationship.
```
bento,plate
```
## 10 Select all the things!
Here i used (*) for select all.
```
*
```
## 11 Select everything on a plate
Here i used (*) after selector with (space), for select all inside this selector.
```
plate
```
## 12 Select every apple that's next to a plate
Here i used two selector with Adjacent sibling selector
```
plate + apple
```
## 13 Select the pickles beside the bento
Here i used two selector with General sibling selector (~)
for select all element from firt to second.

```
bento ~ pickle
```
## 14 Select the apple directly on a plate
Here i used two selector with Direct child selector (>)
for select the element's direct children.
```
plate > apple
```
## 15 Select the top orange

Here i used two selector with Direct child selector (>)
for select the element's direct children and Pseudo-elements.
```
plate > orange:first-child    ??
```
## 16 Select the apple and the pickle on the plates
Here i used two selector with Direct child selector (>)
for select the element's direct children.
```
plate > :only-child
```

## 17 Select the small apple and the pickle
Here i used two classe selector with Pseudo-elements
```
.small:last-child
```
## 18 Select the 3rd plate
Here i used element selector with pseudo-element for select third element
```
plate :nth-child(3)
```
## 19 Select the 1st bento
----------
```
bento:nth-last-child(3)  ??
```
## 20 Select first apple
Here i used element selector with pseudo-element for select first element 
```
apple:first-of-type
```
## 21 Select all even plates
Here i used element selector with pseudo-element for select first element 
```
:nth-of-type(even)                                    
.table:nth-of-type(even) ??
```
## 22 Select every 2nd plate, starting from the 3rd
with this pseudo-element select the 2nd plate, starting from the 3rd
```
:nth-of-type(2n+3)
```
## 23 Select the apple on the middle plate
with this pseudo-element select the 2nd plate, starting from the 3rd
```
apple:only-of-type
```
## 24 Select the last apple and orange

```
.small:last-of-type
```
## 25 Select the empty bentos

```
bento :empty
```
## 26 Select the big apples

```
apple:not(.small)
```
## 27 Select the items for someone

```
[for]
```
## 28 Select the plates for someone

```
[for]plate
```
## 29 Select Vitaly's meal

```
bento[for="Vitaly"]
```
## 30 Select the items for names that start with 'Sa'

```
[for^="Sa"]
```
## 31 Select the items for names that end with 'ato'

```
[for$="ato"]
```
## 32 Select the items for names that end with 'ato'

```
[for*="obb"]
```

## Authors

* **Matteo Drago** 
