#!/usr/bin/env node
'use strict'

const fs = require('fs')

const argparse = require('argparse')
const globExpand = require('glob-expand')

const pkg = require('../package.json')

let args = new argparse.ArgumentParser({ description: pkg.description })
args.addArgument(['pattern'], { nargs: '+' })
args.addArgument(['-0'], {
  action: 'storeTrue',
  help: 'Use NULL char separator for piping into xargs -0'
})
args.addArgument(['--contain'], {
  help: 'Only return files that contain a regex pattern'
})
args.addArgument(['--fail-on-empty'], {
  action: 'storeTrue',
  help: 'Return 1 if no files have been found'
})
args = args.parseArgs()

const contain = args.contain && new RegExp(args.contain, 'm')
const files = globExpand(args.pattern)
  .filter(file => contain ? contain.exec(fs.readFileSync(file)) : true)

const separator = args['0'] ? '\0' : '\n'
process.stdout.write(files.join(separator))

// UNIX find prints a trailing separator even with -print0:
// find src -print0 | tr '\0' Z
process.stdout.write(separator)

process.exit(args.fail_on_empty && files.length === 0 ? 1 : 0)
