#!/usr/bin/env node

'use strict'

const sugoScaffold = require('sugo-scaffold')

// Generate interface project
sugoScaffold('interface', 'my-projects/my-custom-interface', {
  force: false
}).then((err) => console.error(err))
