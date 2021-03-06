var express = require('express')
var multer = require('multer')
var ext = require('file-extension')
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '.' + ext(file.originalname))
  }
})
var upload = multer({ storage: storage }).single('picture')

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
      createdAt: new Date().getTime()
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
  }, 2000)
})

app.post('/api/pictures', function(req, res) {
  upload(req, res, function (err) {
    if (err){
      res.send(500, 'Error uploading photo')
    }
    res.send('File uploaded!')
  })
})

app.listen(3000, function(err) {
  if (err) console.log('Hubo un Error'), process.exit(1)
  console.log('Platzigram escuchando en el puerto 3000')
})
