const router = require("express").Router();
const Book = require("../../models/books.model");

//Returns a list of books
router.get("/", (req, res) => {
  Book.find()
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

//Returns a detail view of the specified book id.
router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  Book.findById(id)
    .populate("author")
    .then((response) => res.json(response));
});

//Creates a new book with the specified details
router.post("/create-new-book", (req, res) => {
  const { author, isbn, name, description, img_url } = req.body;

  Book.create({ author, isbn, name, description, img_url }).then((response) => {
    res.json(response);
  });
});

//Updates an existing book
router.put("/edit", (req, res) => {
  let { id, isbn, name, description, img_url } = req.body;
  Book.findByIdAndUpdate(
    id,
    {
      isbn,
      name,
      description,
      img_url,
    },
    { new: true }
  ).then((response) => {
    return res.json(response);
  });
});

module.exports = router;
