const express = require('express')
const app = express()
const port = 3000

// to set template engine to ejs we do it using
app.set('view engine','ejs')

app.get('/', (req, res) => {
    let siteName = 'Addidas'
    let searchText = 'Search Now'
  res.render('ejstemplate',{siteName: siteName, searchText: searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = 'Addidas'
    let blogContent = 'Its a very good brand'
  res.render('ejstemplate',{blogTitle: blogTitle,
    blogContent: blogContent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})