const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.get("/",(req,res) => {
   res.sendfile(path.join(__dirname,"index.html"));
});
app.listen(port,() => {
   console.log(`Server is running at port ${port}`);
});
