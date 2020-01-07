import axios from 'axios';

export const getItems = () => {
  axios.defaults.baseURL = 'https://api.nytimes.com';
  const KEY = '59RQizYqGGyqf5Bu8VpViRBqnaFthEVU';
  let page = 1;
  const url = `/svc/topstories/v2/home.json?api-key=${KEY}&page=${page}`;
  return axios.get(url);
};
