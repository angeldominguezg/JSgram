'use strict'
const yo = require('yo-yo')
const translate = require('../translate')
const empty = require('empty-element')

var el = yo`
<nav class="header">
  <div class="nav-wrapper">
    <div class="container">
      <div class="row">
      <div class="col m5 offset-m1 s10">
        <a href="/" class="brand-logo platzigram">Platzigram</a>
      </div>
      <div class="col s2 push-s2 m2 push-m5">
        <a href="#" class="btn btn-large btn-flat dropdown-button" data-activate="drop-user">
          <i class="fas fa-user"></i>
        </a>
        <ul id="drop-user" class="dropdown-content">
          <li><a href="#">Salir</a></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</nav>`

module.exports = function header (ctx, next) {
  var container = document.getElementById('main-header')
  empty(container).appendChild(el)
  next()
}
