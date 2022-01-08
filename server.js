const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

const app = express();
const myStore = new SequelizeStore({
  db: sequelize,
});
const sess = {
  secret: 'Super secret secret',
  store: myStore,
  resave: false,
};
myStore.sync();

app.use(session(sess));
app.engine("hbs", engine(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(path.join(__dirname, '/assets')));
app.use(routes);

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));