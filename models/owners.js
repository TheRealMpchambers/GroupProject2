module.exports = function (sequelize, DataTypes) {
  var Owners = sequelize.define("owners", {
    ownername: DataTypes.STRING,
    email: DataTypes.TEXT,
    selecting: DataTypes.BOOLEAN,
    position: DataTypes.INTEGER,
    // new field created, used for ordering
    modifiedPos: DataTypes.INTEGER
  });
  return Owners;
};