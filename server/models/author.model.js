const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    img_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", authorSchema);

module.exports = Author;
