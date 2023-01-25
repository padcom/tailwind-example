# TailwindCSS Example

This template should help get you started developing with Vue, Vite and fully configured Tailwind CSS with unused class elimination.

The following elements are tested:

- styles in Vue SFCs with lang="postcss"
- scoped styles Vue SFC with lang="postcss"
- elimination of unused classes

## Indirect benefits

When using TailwindCSS classes directly it is hard to spot if a name of custom `utility` class has been miss-spelled. That happens, because PostCSS (and therefore also TailwindCSS) doesn't know that you're referring to a class it should know about.

However, imagine you've created your custom `utility`-layer-level class that you'd like to have applied:

```css
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}
```

Now you can either use it directly:

```html
  <div class="... content-auto">...</div>
```

or through `@apply`:

```html
<template>
  <div class="container">...</div>
</template>

<style lang="postcss">
.container {
  @apply content-auto;
}
</style>
```

In the first case there will be no error reported during processing if you misspelled the name `content-auto`. The latter is not only more readable, yields smaller final js+css bundle when compressed (because of ordering of layered classes which results in repeatable blocks in definitions which in turn compresses better) but also is being checked during build preventing you from misspelling your utility class name.

Oh, and by the way, this also works for other classes, even defined in the same fiele. It is, however, strongly adviced that you do assign your global custom classes you want to use to any defined `@layer`. This will allow TailwindCSS to put your classes in the right order in the resulting CSS file, thus helping to keep the compressed file small.
