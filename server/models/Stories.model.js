module.exports = (sequelize, DataTypes) => {
  const Stories = sequelize.define("Stories", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    storyUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Stories.associate = (models) => {
    // Association with Users table
    Stories.belongsTo(models.Users, {
      foreignKey: "storyUserId", // Foreign key in the Stories model
      as: "storyUser", // Alias for the association
      allowNull: false,
    });
  };

  return Stories;
};
