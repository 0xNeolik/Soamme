const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    isbn: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
