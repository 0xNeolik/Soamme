const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    isbn: String,
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
