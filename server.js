const express = require('express');
const { engine } = require('express-handlebars');
const { json } = require('express/lib/response');
const hbs = require("hbs");
const Postcards = require('./models/Postcards');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/assets'));

app.engine("hbs", engine(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));

app.set("view engine", "hbs");

app.use("/login", function(request, response){
  response.render("login");
});

app.use("/", async function(request, response){
  const data = await Postcards.findAll({});
  //console.log(data[0]);
  // const dataJson = response.json(data);
  // console.log(dataJson)
  // response.render("main", {
  //   news: dataJson
  // });
});

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));