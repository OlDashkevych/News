import * as API from "../server/API";
import articleTmp from "../templates/Article.hbs";
import mapper from "./mapper";
import spinnerBox from "./spinner/spinner";
import scrollToTop from "./scrollToTop";

const articleList = document.querySelector(".articleList");

const fetchArticles = () => {
  API.getItems()
    .then(({ data }) => createMarkup(mapper(data.results)))
    .catch(err => console.error(err))
    .finally(() => {
      spinnerBox.innerHTML = "";
    });
};

const createMarkup = articles => {
  const markup = articles.map(article => articleTmp(article));
  articleList.insertAdjacentHTML("beforeend", markup.join(""));
};

fetchArticles();
