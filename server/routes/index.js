module.exports = (app) => {
  app.use("/api/authors", require("./authors/author.routes"));
  app.use("/api/books", require("./books/book.routes"));
  app.use("/api/api/upload", require("./upload/uploads.routes"));
};
