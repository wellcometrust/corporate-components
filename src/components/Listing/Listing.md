# Listing

Layout component (DOM wrapper) for more granular page components; allows for consistent styling of pieces of the DOM.

## When to use

A Listing can be used multiple times within a page/layout and is ideal for wrapping the following components:

- Contact
- LinkListItem
...

## How to use

A Listing can contain one or many child components. The Listing will wrap these in either a `<div>`, `<ol>` or `<ul>` depending on the `as` prop.
