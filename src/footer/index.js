'use strict'
const yo = require('yo-yo')
const translate = require('../translate')

var el = yo`
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <!-- Dropdown Trigger-->
        <a class="dropdown-button btn" href="#" data-activates="dropdown1">${translate.message('language')}</a>
        <ul class="dropdown-content" id="dropdown1">
          <li><a href="#!" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#!" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
        </ul>
        <!-- Dropdown Structure-->
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
    </div>
  </div>
</footer>`

function lang(locale) {
  localStorage.locale = locale
  location.reload()
  return false
}

document.body.appendChild(el)