# TailwindCSS Example

This template should help get you started developing with Vue, Vite and fully configured Tailwind CSS with unused class elimination.

The following elements are tested:

- styles in Vue SFCs with lang="postcss"
- scoped styles Vue SFC with lang="postcss"
- elimination of unused classes

## Direct benefits

A lot of things make no sense to me in the programming world lately. One of those things is the ability to provide quality educational content. Documentation for the major tools and frameworks out there sucks so bad it is not impossible to unlear clean coding from just trying to read them.

Therefore I set out here to show you how to work responsibly, at least with TailwindCSS.

### What goes where?

In a Vue.js SFC file there are by default 3 sections: `<template>`, `<script>` and `<style>`. Each of those sections serves not only technical purposes but above all to put things where they belong, keep 'em separated. Keeping closer together things that change together is also a good practice. That's why all 3 sections are present in the same file. I presume it would also be possible to create a section for tests, i18n and what have you.

Keeping that in sight one should also give good names to things one creates. Failure in naming something means it is either too complicated, misplaced or miscomposed. So let's assume a simple template that displays a message:

```html
<template>
  <div class="message-display">{{ message }}</div>
</template>
```

Now, you should put your styles where they belong. In the case of TailwindCSS we're using PostCSS under the hood and that's the language we should use with the `<style>` block:

```html
<style lang="postcss">
.test {
  @apply text-xl text-gray-800;
}
</style>
```

This way you're going to make the resulting css+js bundle smaller after compression. The reason for it is, actually, surprising! If you just build your app with inline TailwindCSS macros vs using `@apply` in a separate script block then then the classes become more repetitive (TailwindCSS sorts the applied classes by `@layer`s!!!) which means the compression algorithm can describe the same block of data using smaller number of bits (generally speaking).

If you'd like you can also have multiple `@apply` directives in one class. That'll allow you to group macros logically, as you see fit and overcome the ultra long lines problem.

### Indirect benefits

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

## Comparison of bundle size - inline vs @apply

The following lists the size comparison of code that uses TailwindCSS macros inline vs using the `@apply` CSS directive with classes:

#### `@apply`

```
$ ll dist-apply/assets
total 128
drwxrwxr-x 2 padcom padcom  4096 sty 25 23:34 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 23:33 ../
-rw-rw-r-- 1 padcom padcom 58612 sty 25 23:33 index-2667b77d.js
-rw-rw-r-- 1 padcom padcom 21561 sty 25 23:33 index-2667b77d.js.br
-rw-rw-r-- 1 padcom padcom 23800 sty 25 23:33 index-2667b77d.js.gz
-rw-rw-r-- 1 padcom padcom  3782 sty 25 23:33 index-76ae7a79.css
-rw-rw-r-- 1 padcom padcom   917 sty 25 23:33 index-76ae7a79.css.br
-rw-rw-r-- 1 padcom padcom  1131 sty 25 23:33 index-76ae7a79.css.gz
```

#### Inlined

```
$ ll dist-inline/assets
total 128
drwxrwxr-x 2 padcom padcom  4096 sty 25 23:34 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 23:33 ../
-rw-rw-r-- 1 padcom padcom  3563 sty 25 23:33 index-4f366a98.css
-rw-rw-r-- 1 padcom padcom   911 sty 25 23:33 index-4f366a98.css.br
-rw-rw-r-- 1 padcom padcom  1117 sty 25 23:33 index-4f366a98.css.gz
-rw-rw-r-- 1 padcom padcom 58681 sty 25 23:33 index-ab39fb54.js
-rw-rw-r-- 1 padcom padcom 21620 sty 25 23:33 index-ab39fb54.js.br
-rw-rw-r-- 1 padcom padcom 23852 sty 25 23:33 index-ab39fb54.js.gz
```

#### Results

Less is better - the lesser diff, the bigger saving and the smaller the file, the less data to transfer.

| Mode | CSS | JS | Algorithm | Total | Diff to none | Diff to gzip | Diff to brotli | `@apply`/inline |
| ---- | --: | -: | --------- | ----: | -----------: | -----------: | -------------: | --------------: |
| `@apply` | 3782 | 58612 | none | 62394 | 0 | 37463 | 39916 | 150 |
| inline | 3563 | 58681 | none | 62244 | 0 | 37275 | 39713 | -150 |
| `@apply` | 1131 | 23800 | gzip | 24931 | -37463 | 0 | 2453 | -38 |
| inline | 1117 | 23852 | gzip | 24969 | -37275 | 0 | 2438 | 38 |
| `@apply` | 917 | 21561 | brotli | 22478 | -39863 | -2453 | 0 | -53 |
| inline | 911 | 21620 | brotli | 22531 | -39713 | -2438 | 0 | 53 |
