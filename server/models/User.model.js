module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverPic: {
      type: DataTypes.STRING,
    },
    profilePic: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });

    Users.hasMany(models.Comments, {
      foreignKey: "commentUserId",
      as: "comments",
      onDelete: "CASCADE",
    });

    Users.hasMany(models.Stories, {
      foreignKey: "storyUserId", // Foreign key in the Stories model
      as: "stories", // Alias for the association
      onDelete: "CASCADE", // Optional: delete all associated stories when user is deleted
    });

    Users.hasMany(models.Relationships, {
      foreignKey: "followerUserId", // Foreign key for the followerUser association
      as: "followerRelationships",
      onDelete: "CASCADE", // Optional: delete all associated relationships when user is deleted
    });

    Users.hasMany(models.Relationships, {
      foreignKey: "followedUserId", // Foreign key for the followedUser association
      as: "followedRelationships",
      onDelete: "CASCADE", // Optional: delete all associated relationships when user is deleted
    });

    Users.hasMany(models.Likes, {
      foreignKey: "likeUserId",
      as: "likeUser",
      onDelete: "CASCADE",
    });
  };

  return Users;
};
