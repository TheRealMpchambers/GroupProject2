module.exports = function(sequelize, DataTypes) {
    var Weeks = sequelize.define("weeks", {
      StartDate: DataTypes.DATE,
      EndDate: DataTypes.DATE,
      // added this to the model
      Available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    });
    return Weeks;
  };