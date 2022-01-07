const User = require('./User');
const Postcards = require('./Postcards');
const Comments = require('./Comments');

Postcards.hasMany(Comments, {
  foreignKey: 'postcard_id',
});

Comments.belongsTo(Postcards, {
  foreignKey: 'postcard_id',
});

module.exports = { User, Postcards, Comments };