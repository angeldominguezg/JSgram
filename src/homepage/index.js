'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')

page('/', (ctx, next) => {
  title('Platzigram - Home')
  const main = document.getElementById('main-container')
  var pictures = [
    {
      user: {
        username: 'adominguez',
        avatar:
          'https://avatars2.githubusercontent.com/u/4062638?s=400&u=9265f2fa18a8618d45cb67d8e82a099b5428519c&v=4'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'adominguez',
        avatar:
          'https://avatars2.githubusercontent.com/u/4062638?s=400&u=9265f2fa18a8618d45cb67d8e82a099b5428519c&v=4'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() -32)
    }
  ]

  empty(main).appendChild(template(pictures))
})
