# TailwindCSS Example

This template should help get you started developing with Vue, Vite and fully configured Tailwind CSS with unused class elimination.

The following elements are tested:

- styles in Vue SFCs with lang="postcss"
- scoped styles Vue SFC with lang="postcss"
- elimination of unused classes

## Comparison of inline vs @apply

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
| `@apply` | 917 | 21561 | brotli | 22478 | -2453 | -2453 | 0 | -53 |
| inline | 911 | 21620 | brotli | 22531 | -2438 | -2438 | 0 | 53 |
