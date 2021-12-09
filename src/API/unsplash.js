import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lN7WsG0Q9xu9EGEHL77d7kvdt44bKZaSPD1V6w9zTYQ"
  }
});
