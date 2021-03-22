document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".accordion-card-list").forEach((list) => {
    list.addEventListener("click", () => {
       list.classList.toggle("active");
    });

  });
});
