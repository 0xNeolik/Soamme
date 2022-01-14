const router = require("express").Router();
const Author = require("../../models/author.model");

//Creates a new author with the specified details
router.post("/create-new-author", (req, res) => {
  const { first_name, last_name, img_url } = req.body;

  Author.create({ first_name, last_name, img_url }).then((response) => {
    res.json(response);
  });
});

//Returns a list of authors
router.get("/", (req, res) => {
  Author.find()
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

//Returns a detail view of the specified author
router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  Author.findById(id).then((response) => res.json(response));
});

//Updates an existing author
router.put("/updateAuthor/:id", (req, res) => {
  let { first_name, last_name, img_url } = req.body;
  Author.findOneAndUpdate(
    { first_name, last_name, img_url },
    { new: true }
  ).then((response) => {
    return res.json(response);
  });
});

module.exports = router;
