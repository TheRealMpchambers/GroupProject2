module.exports = function(sequelize, DataTypes) {
    var Owners = sequelize.define("owner", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Owners;
  };