const scrollTopButton = document.querySelector(".scrollTopButton");
const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const showButton = () => {
  if (document.documentElement.scrollTop > 400) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
};
scrollTopButton.addEventListener("click", scrollToTop);
window.addEventListener("scroll", showButton);
