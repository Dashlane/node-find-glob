#!/usr/bin/env node
'use strict'

const argparse = require('argparse')
const glob = require('glob')

const pkg = require('../package.json')

let args = new argparse.ArgumentParser({ description: pkg.description })
args.addArgument(['pattern'], { nargs: '+' })
args.addArgument(['-0'], {
  action: 'storeTrue',
  help: 'Use NULL char separator for piping into xargs -0'
})
args = args.parseArgs()

const separator = args['0'] ? '\0' : '\n'

args.pattern.forEach((pattern, patternIndex) => {
  process.stdout.write(glob.sync(pattern).join(separator))

  // UNIX find prints a trailing separator even with -print0:
  // find src -print0 | tr '\0' Z
  process.stdout.write(separator)
})
