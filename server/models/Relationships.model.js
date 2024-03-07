module.exports = (sequelize, DataTypes) => {
  const Relationships = sequelize.define("Relationships", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    followerUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    followedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Relationships.associate = (models) => {
    // Association with Users table for followerUser
    Relationships.belongsTo(models.Users, {
      foreignKey: "followerUserId",
      as: "followerUser",
      allowNull: false,
    });

    // Association with Users table for followedUser
    Relationships.belongsTo(models.Users, {
      foreignKey: "followedUserId",
      as: "followedUser",
      allowNull: false,
    });
  };

  return Relationships;
};
