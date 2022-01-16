const User = require("../../models/User.model");
const router = require("express").Router();

router.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

module.exports = router;
