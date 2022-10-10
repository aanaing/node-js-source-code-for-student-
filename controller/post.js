///get all data
const all = async (req, res, next) => {
  res.json({ msg: "get all data" });
};

//get id data
const get = async (req, res, next) => {
  res.json({ msg: "get single user" });
};

//add data
const post = async (req, res, next) => {
  res.json({ msg: "add new post", request: req.body });
};

//update data
const patch = async (req, res, next) => {
  res.json({ msg: "update data" });
};

//delete data
const drop = async (req, res, next) => {
  res.json({ msg: "delete data" });
};

module.exports = {
  all,
  get,
  post,
  patch,
  drop,
};
