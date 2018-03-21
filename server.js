var express = require('express')
var app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index', { title: 'Platzigram' })
})

app.get('/signup', function(req, res) {
  res.render('index', { title: 'Platzigram - Signup' })
})

app.get('/signin', function(req, res) {
  res.render('index', { title: 'Platzigram - Signin' })
})

app.get('/api/pictures', function(req, res) {
  let pictures = [
    {
      user: {
        username: 'adominguez',
        avatar:
          'https://avatars2.githubusercontent.com/u/4062638?s=400&u=9265f2fa18a8618d45cb67d8e82a099b5428519c&v=4'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
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
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 32)
    }
  ]
  setTimeout(() => {
    res.send(pictures)
  }, 2000);
})

app.listen(3000, function(err) {
  if (err) console.log('Hubo un Error'), process.exit(1)
  console.log('Platzigram escuchando en el puerto 3000')
})
