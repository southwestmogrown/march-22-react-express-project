'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserServer = sequelize.define('UserServer', {
    userId: DataTypes.INTEGER,
    serverId: DataTypes.INTEGER
  }, {});
  UserServer.associate = function(models) {
    UserServer.belongsTo(models.User, { onDelete: "CASCADE", foreignKey: "userId" });
  };
  return UserServer;
};