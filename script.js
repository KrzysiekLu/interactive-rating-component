const opinionBtns = document.querySelectorAll(".opinion-box_button");
const submitBtn = document.querySelector(".rating-component_submit-button");
const rating = document.querySelector(".rating");
const thankingComponent = document.querySelector(".thanking-component");
const ratingComponent = document.querySelector(".rating-component");
// let target;
opinionBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    opinionBtns.forEach((btn) => btn.classList.remove("btn-clicked"));
    e.target.classList.add("btn-clicked");
    return (ratingValue = e.target.textContent);
  })
);
submitBtn.addEventListener("click", () => {
  rating.textContent = ratingValue;
  ratingComponent.classList.add("hidde");
  thankingComponent.classList.remove("hidde");
});
