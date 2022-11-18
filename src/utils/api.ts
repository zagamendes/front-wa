import axios from "axios";
const api = axios.create({
  baseURL: "https://back-wa.herokuapp.com/movies",
});
export default api;
