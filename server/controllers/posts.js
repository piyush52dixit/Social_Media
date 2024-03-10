const Posts = require("../models/Posts.model.js");
const Users = require("../models/User.model.js");

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll({
      include: [
        {
          model: Users,
          attributes: ["id", "userName", "name", "profilePic"],
        },
      ],
    });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPosts };
