const { json } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

/* let user = [
  { id: 1, name: "aye aye", age: 23 },
  { id: 2, name: "aye win", age: 24 },
  { id: 3, name: "aye maw", age: 25 },
];

//get all
app.get("/user", (req, res) => res.json(user));

//get id
app.get("/user/:id", (req, res, next) => {
  let id = req.params.id;
  let userId = user.find((ur) => ur.id == id);
  if (userId) res.json(userId);
});

//add user
app.post("/user", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;
  let newUser = { id: id, name: name, age: age };
  user.push(newUser);
  res.json(user);
});

//update user name by id
app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let userId = user.find((ur) => ur.id == id);
  if (userId) {
    userId.name = req.body.name;
    res.json(user);
  } else res.json({ msg: "Update id not found " });
});

//delete user name by id
app.delete("/user/:id", (req, res, next) => {
  let id = req.params.id;
  user = user.filter((usr) => usr.id != id);
  res.json(user);
}); */

const userRoute = require("./routes/user");
app.use("/users", userRoute);

const postRouter = require("./routes/post");
app.use("/post", postRouter);

app.listen(3000, console.log("Server is running at port 3000"));
