module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define("Likes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    likeUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    likePostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Likes.associate = (models) => {
    // Association with Users table
    Likes.belongsTo(models.Users, {
      foreignKey: "likeUserId", // Foreign key in the Likes model
      as: "likeUser", // Alias for the association
      allowNull: false,
    });

    // Association with Posts table
    Likes.belongsTo(models.Posts, {
      foreignKey: "likePostId", // Foreign key in the Likes model
      as: "likePost", // Alias for the association
      allowNull: false,
    });
  };

  return Likes;
};
