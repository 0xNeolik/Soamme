const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
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
