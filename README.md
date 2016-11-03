# find-glob

[![js-strict-standard-style](https://img.shields.io/badge/code%20style-strict%20standard-117D6B.svg)](https://github.com/denis-sokolov/strict-standard)

Regular `find` has inconsistent support for extended regex syntax.
This replacement uses [`glob` package](https://www.npmjs.com/package/glob) syntax and will work consistently anywhere your Node works.

```js
// Show js files in the directory
find-glob '**/*.js'

// Run eclint with all files you want to find
find-glob -0 '**/*.js' '**/*.json' '!node_modules/**' | xargs -0 eclint

// Check if your codebase contains TODO notes:
find-glob --contain 'TODO' --fail-on-empty '**/*.js'

// Check that your codebase does NOT contain TODO notes:
find-glob --contain 'TODO' --fail-on-find '**/*.js'
```

## Options

`-0` enables a null byte separator, to be used with `-0` in `xargs`.

`--contain '^http:'` will filter only the files that contain the passed regular expression, which is run in multi-line mode by default, so `^` and `$` refer to a line begin and line end.

`--fail-on-empty` will return an error code if no files have been found.

`--fail-on-find` will return an error code if files have been found.
