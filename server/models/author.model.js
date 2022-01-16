const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    allias: String,
    img_url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", authorSchema);

module.exports = Author;
