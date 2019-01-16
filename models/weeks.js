module.exports = function (sequelize, DataTypes) {
  var Weeks = sequelize.define("weeks", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Weeks;
};
