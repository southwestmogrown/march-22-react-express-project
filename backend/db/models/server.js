'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    icon: DataTypes.STRING
  }, {});
  Server.associate = function(models) {
    // associations can be defined here
    Server.belongsTo(models.User, { foreignKey: "ownerId" });
    Server.hasMany(models.Channel, { foreignKey: "serverId", onDelete:"CASCADE" });
    Server.hasMany(models.UserServer, { as: "userservers", foreignKey: "serverId", onDelete: "CASCADE" });
  };
  return Server;
};