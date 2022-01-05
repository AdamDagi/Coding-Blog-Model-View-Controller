const express = require('express');
const { engine } = require('express-handlebars');
const hbs = require("hbs");
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

app.use("/", function(request, response){
  response.render("main", {
    news: [
      {
        title: 'test',
        autor: 'test',
        exhibition_date: '01.01.2022',
        description: 'description test1',
      }, 
      {
        title: "test2",
        description: "description test2"
      },
      {
        title: "test",
        description: "description test"
      }, 
      {
        title: "test2",
        description: "description test2"
      },
      {
        title: "test",
        description: "description test"
      }, 
      {
        title: "test2",
        description: "description test2"
      }
    ]
  });
});

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));