const router = require("express").Router();

const Book = require("../../models/books.model");
const User = require("../../models/User.model");

router.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .populate("favorites")
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

router.get(`/addFavorite/:id`, (req, res) => {
  const user_id = req.session.currentUser._id;
  const { id } = req.params;
  Book.findById(id).then((response) => {
    User.findByIdAndUpdate(
      user_id,
      {
        $push: { favorites: response },
      },
      { new: true }
    ).then((response) => {
      console.log(response);
      res.json(response);
    });
  });
});

module.exports = router;
