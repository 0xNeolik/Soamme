const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      default: "61e32f8592e29204962f29e6",
    },
    isbn: String,
    name: String,
    description: String,
    img_url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
