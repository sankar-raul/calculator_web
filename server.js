const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'404.html'));
});
app.get("/",(req,res) => {
   res.sendfile(path.join(__dirname,"index.html"));
});
app.listen(port,() => {
   console.log(`Server is running at port ${port}`);
});
