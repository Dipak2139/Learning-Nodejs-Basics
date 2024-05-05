const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World1234!");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog vai");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact vai");
});

//   app.get('/blog/intro-js', (req, res) => {
//     res.send('Hello intro to js')
//   })

//   app.get('/blog/intro-python', (req, res) => {
//     res.send('Hello itro to python')
//   })   => the code is not maintainable like this. Like this we will thousands of code and hence we cannot maintain it

// hence we will use express
app.get("/blog/:slug", (req, res) => {
    // console.log(req)
    console.log(req.params)//output:  params: { slug: 'js' },
    console.log(req.query) //output: query: { mode: 'dark', reg: 'in' },
  res.send(`Hello welcome to ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
