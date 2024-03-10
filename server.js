const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname,"docs")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"docs",'404.html'));
});
app.get("/",(req,res) => {
   res.sendfile(path.join(__dirname,"docs","index.html"));
});
app.listen(port,() => {
   console.log(`Server is running at port ${port}`);
});
