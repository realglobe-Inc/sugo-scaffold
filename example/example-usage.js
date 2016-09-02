#!/usr/bin/env node

'use strict'

const sugoScaffold = require('sugo-scaffold')

// Generate module project
sugoScaffold(
  'module', // Type
  'my-projects/my-custom-module', // Destination directory
  {
    force: false
  }
)
  .then(() => console.log('done!'))
  .catch((err) => console.error(err))
