const scrollTopButton = document.querySelector(".scrollTopButton");
const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export const scrollToArtList = (behavior, top) => {
  window.scrollTo({
    top,
    behavior
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
