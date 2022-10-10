require("dotenv").config();
const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

const app = express();
app.use(express.json());

const userRoute = require("./routes/user");
const postRouter = require("./routes/post");

app.use("/users", userRoute);
app.use("/post", postRouter);

//error handling
app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
});

app.listen(
  process.env.PORT,
  console.log(`Server is running at port ${process.env.PORT}`)
);
