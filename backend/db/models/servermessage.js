'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServerMessage = sequelize.define('ServerMessage', {
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  ServerMessage.associate = function(models) {
    ServerMessage.belongsTo(models.User, { foreignKey: "userId" });
    ServerMessage.belongsTo(models.Channel, { foreignKey: "channelId" });
  };
  return ServerMessage;
};