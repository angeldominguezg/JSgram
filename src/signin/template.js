'use strict'
const yo = require('yo-yo')
const landing = require('../landing')

let signinForm = yo`<div class="col s12 m7">
                      <div class="row">
                        <div class="signup-box">
                          <h1 class="platzigram">Platzigram</h1>
                            <form class="signup-form" action="">
                              <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                                <div class="section">
                                  <a class="waves-effect waves-light btn btn-fb hiden-on-small-only" href="">Iniciar sesión con Facebook</a>
                                  <a class="waves-effect waves-light btn btn-fb hide-on-med-and-up" href="">Iniciar sesión</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                  <input id="username" type="text" name="usename" placeholder="Nombre de usuario"/>
                                  <input id="password" type="password" name="password" placeholder="Contraseña"/>
                                  <button class="waves-effect waves-light btn" type="submit">Inicia Session</button>
                                </div>
                            </form>
                          </div>
                        </div>
                        <div class="row">
                          <div class="login-box">No tiene una cuenta? <a href="/signup">Regístrate</a>
                        </div>
                      </div>
                    </div>`
module.exports = landing(signinForm)
