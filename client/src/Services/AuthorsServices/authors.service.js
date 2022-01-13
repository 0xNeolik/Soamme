import axios from "axios";

class AuthorService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/authors`,
      withCredentials: true,
    });
  }
  getAllAuthors = () => this.app.get(`/`);
  newAuthor = (first_name, last_name) =>
    this.app.post("/create-new-author", { first_name, last_name });
}
export default AuthorService;
