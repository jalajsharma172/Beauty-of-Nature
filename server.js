const express = require('express')
const app = express()
const port = 8080
const path = require('path')
// this stuff is for serving ejs files.
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')
// this stuff is for serving whole Folder.
// app.use(express.static(public))
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



  


















  






