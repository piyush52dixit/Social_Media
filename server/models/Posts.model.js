module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
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
    img: {
      type: DataTypes.STRING,
    },
  });
  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, {
      foreignKey: "userId",
      allowNull: false,
    });

    Posts.hasMany(models.Comments, {
      foreignKey: "commentPostId", // Foreign key in the Comments model
      as: "comments", // Alias for the association
      onDelete: "CASCADE", // Optional: delete all associated comments when post is deleted
    });
  };

  return Posts;
};
