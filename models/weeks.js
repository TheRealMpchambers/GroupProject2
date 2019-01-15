module.exports = function(sequelize, DataTypes) {
    var Weeks = sequelize.define("weeks", {
      StartDate: DataTypes.DATE,
      EndDate: DataTypes.DATE
    });
    return Weeks;
  };