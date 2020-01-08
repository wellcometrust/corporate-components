# Header

Site top level navigation, search input and branding.

## When to use

The header should only be used once and at the top of each page

## How to use

Header component must have access to the following contexts:

* **Nav Context** - sets the open and closed state for the nav pane when in narrow view mode
* **Search Context** - sets the open and closed state for the search pane across all view modes

## Accessibility notes

Navigation for smaller devices is toggled by clicking the burger icon.

The nav UI in this state comprises a list of top level links. Clicking one of these links will toggle a pane containing secondary links for that heading.

Due to the complexity and massive amount of work involved in making this navigable for keyboard users it has instead been decided to wrap the burger icon with a standard <a>
