# Propulsion UI

**Designed and developed by** [Luqman](https://theluqmn.github.io)

→ [Demo](https://theluqmn.github.io/pro)

> [!NOTE]
> Propulsion UI is not yet ready for production use.

A component library with a look inspired by the technicality and sophistication found inside an aircraft cockpit/flight deck. Propulsion UI is originally built to standardise the components across my projects. Created using [SolidJS](https://www.solidjs.com) and [TailwindCSS](https://tailwindcss.com).

Propulsion UI has built-in support for light mode - simply include `light="true"` to the your components.

## Installation

1. Run `npm install @theluqmn/propulsion-ui`
2. Add the following to your `tailwind.config.js` file:

```js
module.exports = {
    content: [
        "./node_modules/@theluqmn/propulsion-ui/dist/**/*.js",
    ],
}
```

That's it really.

## Components

Below are a list of the components available in Propulsion UI:

### Text

- [x] Text
- [x] Text (solid)
- [x] Text with link
- [x] Text with heading

### Buttons

- [x] Button
- [x] Button (solid)
- [x] Button with inline text

### Frames

- [x] Frame
- [x] Frame (solid)
- [x] Frame with heading
