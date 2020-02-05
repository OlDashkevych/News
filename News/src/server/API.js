import axios from "axios";

export const getItems = (page = 1) => {
  axios.defaults.baseURL = "https://api.nytimes.com";
  const KEY = "59RQizYqGGyqf5Bu8VpViRBqnaFthEVU";
  const url = `/svc/topstories/v2/home.json?api-key=${KEY}`;
  return axios.get(url);
};
