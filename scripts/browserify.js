#!/usr/bin/env node

const browserify = require('../lib/browserify')

browserify({
  watch: process.argv[2] === 'watch',
  test: process.env.NODE_ENV === 'test'
})
