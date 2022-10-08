const router = require("express").Router();
router.get("/", (req, res) => res.json({ msg: "Post router" }));

router.post("/", (req, res) => res.json(req.body));

router
  .route("/:id")
  .get((req, res) => res.json({ msg: `get post id is ${req.params.id}` }))
  .patch((req, res) => res.json({ msg: `Edit id is ${req.params.id}` }))
  .delete((req, res) => res.json({ msg: `Delte id is ${req.params.id}` }));
module.exports = router;
