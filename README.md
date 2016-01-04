# find-glob

[![js-strict-standard-style](https://img.shields.io/badge/code%20style-strict%20standard-117D6B.svg)](https://github.com/denis-sokolov/strict-standard)

Regular `find` has inconsistent support for extended regex syntax.
This replacement uses [`glob` package](https://www.npmjs.com/package/glob) syntax and will work consistently anywhere your Node works.

```js
// Show js files in the directory
find-glob '**/*.js'

// Run eclint with all files you want to find
find-glob -0 '**/*.js' '**/*.json' '!node_modules/**' | xargs -0 eclint
```
