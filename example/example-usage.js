#!/usr/bin/env node

'use strict'

const sugoScaffold = require('sugo-scaffold')

// Generate interface project
sugoScaffold(
  'interface', // Type
  'my-projects/my-custom-interface', // Destination directory
  {
    force: false
  }
).then((err) => console.error(err))
