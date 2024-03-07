module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    // Association with Users table
    Comments.belongsTo(models.Users, {
      foreignKey: "commentUserId", // Foreign key in the Comments model
      as: "commentUser",            // Alias for the association
      allowNull: false,
    });

    // Association with Posts table
    Comments.belongsTo(models.Posts, {
      foreignKey: "commentPostId", // Foreign key in the Comments model
      as: "commentPost",            // Alias for the association
      allowNull: false,
    });
  };

  return Comments;
};
