const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5555;

const db = require("./models/index");

const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const commentRoutes = require("./routes/comments.js");
const likeRoutes = require("./routes/likes.js");
const authRoutes = require("./routes/auth.js");

//middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/auth", authRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`);
  });
});
