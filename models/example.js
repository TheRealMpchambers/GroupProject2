module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Schedule;
};
