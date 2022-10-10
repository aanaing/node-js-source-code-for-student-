const DB = require("../dbs/user");
const helper = require("../utils/helper");

//get all users
const all = async (req, res) => {
  let users = await DB.find();
  helper.fMsg(res, "All users", users);
};

//get single user
const get = async (req, res, next) => {
  let id = req.params.id;
  let singleuser = await DB.findById(id);
  helper.fMsg(res, "Get single user", singleuser);
};

//Add user
const post = async (req, res, next) => {
  let saveuser = new DB(req.body);
  let result = await saveuser.save();
  helper.fMsg(res, "Data Added", result);
};

//Update user
const patch = async (req, res, next) => {
  let user = await DB.findById(req.params.id);
  if (user) {
    await DB.findByIdAndUpdate(user._id, req.body);
    let returnUser = await DB.findById(user._id);
    helper.fMsg(res, "Update data", returnUser);
  } else {
    next(new Error("Can't find id"));
  }
};

//delete User
const drop = async (req, res, next) => {
  let deleteUser = await DB.findByIdAndDelete(req.params.id);
  helper.fMsg(res, "deleted data", deleteUser);
};

module.exports = {
  all,
  get,
  post,
  patch,
  drop,
};
