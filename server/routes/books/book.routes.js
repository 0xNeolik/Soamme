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
  const { author, isbn, name } = req.body;

  Book.create({ author, isbn, name }).then((response) => {
    res.json(response);
  });
});

//Updates an existing book
router.put("/updateBook/:id", (req, res) => {
  let { author, isbn, name } = req.body;
  Book.findOneAndUpdate({ author, isbn, name }, { new: true }).then(
    (response) => {
      return res.json(response);
    }
  );
});

module.exports = router;
