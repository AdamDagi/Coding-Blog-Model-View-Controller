const express = require('express');
const { engine } = require('express-handlebars');
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 3001;
const Postcards = require('./models/Postcards');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

app.use(express.static(__dirname + '/assets'));

app.engine("hbs", engine(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));

app.set("view engine", "hbs");

// app.use("/login", function(request, response){
//   response.render("login");
// });

// app.use("/dashboard", function(request, response){
//   response.render("dashboard");
// });

// app.use("/", function(request, response){
//   Postcards.findAll({
//     raw: true
//   }).then(news => {
//     response.render("main", {
//       news
//     });
//   });
// });

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));