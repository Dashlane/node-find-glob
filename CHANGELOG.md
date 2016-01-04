# v2.0.0

Breaking change: patterns beginning with an exclamation mark.

They are now negative and allow for filtering the set of files after the fact:

```sh
find-glob '**/*.js' '!node_modules/**'
```
