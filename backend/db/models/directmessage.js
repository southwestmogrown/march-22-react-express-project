'use strict';
module.exports = (sequelize, DataTypes) => {
  const DirectMessage = sequelize.define('DirectMessage', {
    userId: DataTypes.INTEGER,
    recieverId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  DirectMessage.associate = function(models) {
    DirectMessage.belongsTo(models.User, { foreignKey: "userId" });
    DirectMessage.belongsTo(models.User, { foreignKey: "recieverId" });
  };
  return DirectMessage;
};