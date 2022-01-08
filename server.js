const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const hbs = require("hbs");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const Postcards = require('./models/Postcards');

const routes = require('./controllers');
const sequelize = require('./config/connection');

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

app.use(express.static(path.join(__dirname + '/assets')));

app.engine("hbs", engine(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));

app.set("view engine", "hbs");

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));