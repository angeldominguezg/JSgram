'use strict'
const yo = require('yo-yo')
const landing = require('../landing')

let signupForm = yo`<div class="col s12 m7">
                      <div class="row">
                        <div class="signup-box">
                          <h1 class="platzigram">Platzigram</h1>
                            <form class="signup-form" action="">
                              <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                                <div class="section">
                                  <a class="waves-effect waves-light btn btn-fb hide-on-small-only" href="">Iniciar sesión con Facebook</a>
                                  <a class="waves-effect waves-light btn btn-fb hide-on-med-and-up" href=""><i class="fab fa-facebook"></i> Iniciar sesión</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                  <input id="email" type="email" name="email" placeholder="Correo Electronico"/>
                                  <input id="name" type="text" name="name" placeholder="Nombre Completo"/>
                                  <input id="username" type="text" name="usename" placeholder="Nombre de usuario"/>
                                  <input id="password" type="password" name="password" placeholder="Contraseña"/>
                                  <button class="waves-effect waves-light btn" type="submit">Registrate</button>
                                </div>
                            </form>
                          </div>
                        </div>
                        <div class="row">
                          <div class="login-box">Tiene una cuenta? <a href="/signin">Entrar</a>
                        </div>
                      </div>
                    </div>`
module.exports = landing(signupForm)
