const express = require("express");
const blog = require("./routes/blog")
const shop = require("./routes/shope")

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog',blog)
app.use('/shop',shop)


app.get("/", (req, res) => {
  console.log("Get request");
  res.send("This is a get request");
});

app.post("/", (req, res) => {
  console.log("Post request");
  res.send("This is a post request");
});

app.put("/", (req, res) => {
  console.log("Put request");
  res.send("This is a put request");
});

// It is used for serving html files
app.get("/index", (req, res) => {
    console.log("Put request");
    res.sendFile('templates/index.html', {root: __dirname});
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
