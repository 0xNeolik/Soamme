import axios from "axios";

class BooksService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/books`,
      withCredentials: true,
    });
  }
  getAllBooks = () => this.app.get(`/`);
  newBook = ({ author, isbn, name, description, img_url }) =>
    this.app.post("/create-new-book", {
      author,
      isbn,
      name,
      description,
      img_url,
    });
  getOneBook = (id) => this.app.get(`/details/${id}`);
  editBook = (id, isbn, name, description, img_url) => {
    return this.app.put(`/edit`, id, isbn, name, description, img_url);
  };
}

export default BooksService;
