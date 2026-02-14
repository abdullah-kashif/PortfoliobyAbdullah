  document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
      const icon = item.querySelector('.icon-circle');
      icon.classList.add('active');

      setTimeout(() => {
        icon.classList.remove('active');
      }, 300);
    });
  });


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("show");
});
