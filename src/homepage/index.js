'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')
// const request = require('superagent')
const header = require('../header') // middleware
const request = require('axios')

page('/', header, loadPictures, (ctx, next) => {
  title('Platzigram - Home')
  const main = document.getElementById('main-container')

  empty(main).appendChild(template(ctx.pictures))
})

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .then(function(res) {
      ctx.pictures = res.data
      next()
    })
    .catch(function(err) {
      console.log(err)
    })
}
