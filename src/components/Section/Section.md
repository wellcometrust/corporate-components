# Section

Layout component (DOM wrapper) for more granular page components; allows for consistent styling of large 'sections' of the DOM.

## When to use

A Section can be used multiple times within a page/layout.

## How to use

A Section must contain child components, which the section will wrap in either `<div>` or `<section>`, depending on the `type` prop.

## Accessibility notes

Navigation for smaller devices is toggled by clicking the burger icon.

The nav UI in this state comprises a list of top level links. Clicking one of these links will toggle a pane containing secondary links for that heading.

Due to the complexity and massive amount of work involved in making this navigable for keyboard users it has instead been decided to wrap the burger icon with a standard <a>
