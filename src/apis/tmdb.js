import axios from "axios";

const api_key = "d470a238b9aab25e3b6df09a4413e353";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key,
  },
});
