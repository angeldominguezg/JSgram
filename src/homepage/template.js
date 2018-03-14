'use strict'
const yo = require('yo-yo')
const layout = require('../layout')

let template = yo`
<div class="container timeline">
  <div class="row">
  <div class="col s12 m10 offset-m1 l6 offset-l3">
    <p>Testing</p>
  </div>
  </div>
</div>`

module.exports = layout(template)