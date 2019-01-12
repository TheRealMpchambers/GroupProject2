module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("schedule", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Schedule;
};




