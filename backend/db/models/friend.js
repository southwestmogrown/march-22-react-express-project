'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  Friends.associate = function(models) {
    Friend.belongsTo(models.User, { foreignKey: "userId" });
    Friend.belongsTo(models.User, { foreignKey: "friendId"})
  };
  return Friends;
};