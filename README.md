# tailwind-example

This template should help get you started developing with Vue, Vite and fully configured Tailwind CSS with unused class elimination.

The following elements are tested:

- styles in Vue SFCs with lang="postcss"
- scoped styles Vue SFC with lang="postcss"
- elimination of unused classes

## Comparison of inline vs @apply

The following lists the size comparison of code that uses TailwindCSS macros inline vs using the `@apply` CSS directive with classes:

### `@apply`

#### Unompressed

```
$ ll dist-apply/assets
total 72
drwxrwxr-x 2 padcom padcom  4096 sty 25 22:59 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 22:37 ../
-rw-rw-r-- 1 padcom padcom 58612 sty 25 22:37 index-2667b77d.js
-rw-rw-r-- 1 padcom padcom  3782 sty 25 22:37 index-76ae7a79.css
```

Total:  58612 + 3782 = 62394

inlined - `@apply` = 62244 - 62394 = -150 (inline smaller)

#### Compressed

```
$ ll dist-apply/assets
total 36
drwxrwxr-x 2 padcom padcom  4096 sty 25 22:41 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 22:37 ../
-rw-rw-r-- 1 padcom padcom 23800 sty 25 22:37 index-2667b77d.js.gz
-rw-rw-r-- 1 padcom padcom  1131 sty 25 22:37 index-76ae7a79.css.gz
```

Total:  23800 + 1131 = 24931

inlined - `@apply` = 24969 - 24931 = 38 (`@apply` smaller)

### Inlined

#### Uncompressed

```
$ ll dist-inline/assets
total 72
drwxrwxr-x 2 padcom padcom  4096 sty 25 22:59 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 22:40 ../
-rw-rw-r-- 1 padcom padcom  3563 sty 25 22:40 index-4f366a98.css
-rw-rw-r-- 1 padcom padcom 58681 sty 25 22:40 index-ab39fb54.js
```

Total:  3563 + 58681 = 62244

`@apply` - inlined = 62394 - 62244 = 150 (inline smaller)

#### Compressed

```
$ ll dist-inline/assets
total 36
drwxrwxr-x 2 padcom padcom  4096 sty 25 22:42 ./
drwxrwxr-x 3 padcom padcom  4096 sty 25 22:40 ../
-rw-rw-r-- 1 padcom padcom  1117 sty 25 22:40 index-4f366a98.css.gz
-rw-rw-r-- 1 padcom padcom 23852 sty 25 22:40 index-ab39fb54.js.gz
```

Total:  1117 + 23852 = 24969

`@apply` - inlined = 24931 - 24969 = -38 (`@apply` smaller).
