'use strict'
const yo = require('yo-yo')
const landing = require('../landing')
const translate = require('../translate')

let signupForm = yo`<div class="col s12 m7">
                      <div class="row">
                        <div class="signup-box">
                          <h1 class="platzigram">Platzigram</h1>
                            <form class="signup-form" action="">
                              <h2>${translate.message('signup.subheading')}</h2>
                                <div class="section">
                                  <a class="waves-effect waves-light btn btn-fb hide-on-small-only" href="">${translate.message('signup.text')}</a>
                                  <a class="waves-effect waves-light btn btn-fb hide-on-med-and-up" href=""><i class="fab fa-facebook"></i>${translate.message('signup.facebook')}</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                  <input id="email" type="email" name="email" placeholder="${translate.message('email')}"/>
                                  <input id="name" type="text" name="name" placeholder="${translate.message('fullname')}"/>
                                  <input id="username" type="text" name="usename" placeholder="${translate.message('username')}"/>
                                  <input id="password" type="password" name="password" placeholder="${translate.message('password')}"/>
                                  <button class="waves-effect waves-light btn" type="submit">${translate.message('signup.call-to-action')}</button>
                                </div>
                            </form>
                          </div>
                        </div>
                        <div class="row">
                          <div class="login-box">${translate.message('signup.have-account')}<a href="/signin"> ${translate.message('enter')}</a>
                        </div>
                      </div>
                    </div>`
module.exports = landing(signupForm)
