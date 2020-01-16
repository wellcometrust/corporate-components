# SearchForm

A flexible search `<form>` component - by default will render an `<input type="search" />` inside of a `<label>` tag, with a `<button />` to submit the form.

Will render with the `.search-form` BEM styles applied, however these can be overwritten (with props such as `className`, `labelClassName` etc.)

## When to use

Can be used anywhere in the app which wishes to serve a search `<form>`.

## How to use

### Quick Start

- Import component
- Write handler function for `onSubmit`
- Pass that handler functon as `onSubmit` prop
- Pass a value* to `searchQuery` prop

* The current value of your search query

See props below for full API usage.

## Props

- action: String [default: '/search']
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action
- children: ReactNode
  - Will render before the closing `</form>` tag
- className: String [default: 'search-form']
  - applied to `<form>` tag
- handleInputChange: Function
  - handler function for `<input type="search">` `onChange` trigger
  - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
- handleSubmit: Function
  - handler function for `<form>` `onSubmit` trigger
- hideLabelText: Boolean
  - hides `<label>` text (visually; only for non-screen-reader users)
- inputClassName: String [default: 'search-form__input']
  - applied to `<input type="search" />` tag
- labelClassName: String [default: 'search-form__label']
  - applied to `<label>` tag
- labelTextClassName: String [default: 'search-form__label-text']
  - applied to `<span>` tag inside `<label>`
- method: 'GET' | 'POST' | [default: 'GET']
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method
- searchQuery: String
  - the value of the `<input type="search" />`
- submitButtonClassName: String;
  - applied to submit `<button />` tag
- submitButtonHasStyle: Boolean;
  - if `true`, will apply `.btn` selector to submit `<button />`
