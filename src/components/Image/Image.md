# Image

Component for rendering a responsive image i.e. `<img src="image.jpg" alt="Image description">`

## When to use

Used to render Image content paragraph types

## Responsive image best practice

Combined usage of sizes and srcset attributes will allow browser to select most appropriate image source for the current screen width.

### Srcset

This example uses images of the following dimensions (width x height)

- 400x225
- 768x432
- 1024x576


### Sizes

The following default sizes have been selected

**Sizes key**
- px = pixels
- vw = viewport width

| Breakpoint | Width of the image | Design notes |
| --- | --- | --- |
| (min-width: 1494px) | 648px | The content and therefore the Image have reached their maximum widths and will get no wider |
| (min-width: 1024px) | 42vw | Image occupies the middle six columns of the page |
| (min-width: 768px) | 75vw | Image occupies the middle 10 columns of the page |
| Default (no breakpoint) | 90vw | Image is full content width - 90% of the viewport width |
