import axios from "axios";

class AuthorService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/authors`,
      withCredentials: true,
    });
  }
  getAllAuthors = () => this.app.get(`/`);
  newAuthor = ({ first_name, last_name, allias, img_url }) =>
    this.app.post("/create-new-author", {
      first_name,
      last_name,
      allias,
      img_url,
    });
  getOneAuthor = (id) => this.app.get(`/details/${id}`);
  editAuthor = (id, first_name, last_name, allias, img_url) => {
    console.log(id, first_name, last_name, allias, img_url);
    return this.app.put(
      `/updateAuthor`,
      id,
      first_name,
      last_name,
      allias,
      img_url
    );
  };
}
export default AuthorService;
