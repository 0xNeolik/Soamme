import axios from "axios";

class BooksService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/books`,
      withCredentials: true,
    });
  }
  getAllBooks = () => this.app.get(`/`);
}

export default BooksService;
