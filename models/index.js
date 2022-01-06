const User = require('./User');
const Postcards = require('./Postcards');
const Coments = require('./Coments');

Postcards.hasMany(Coments, {
  foreignKey: 'postcard_id',
});

Coments.belongsTo(Postcards, {
  foreignKey: 'postcard_id',
});

module.exports = { User, Postcards, Coments };