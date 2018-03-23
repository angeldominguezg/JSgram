'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')
// const request = require('superagent')
const header = require('../header') // middleware
const request = require('axios')
// const regeneratorRuntime = require('regenerator-runtime')

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

function loadPicturesFetch(ctx, next) {
  fetch('/api/pictures')
    .then(function(res) {
      return res.json()
    })
    .then(function(pictures) {
      ctx.pictures = pictures
      next()
    })
    .catch(function(err) {
      console.log(err)
    })
}

// async function asyncLoad(ctx, next) {
//   try {
//     ctx.pictures = await fetch('/api/pictures').then(res => res.json())
//   } catch (err) {
//     return console.log(err)
//   }
// }
