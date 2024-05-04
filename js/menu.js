export function menu() {
  let $menu = document.querySelector(".menu");
  let $btnBars = document.querySelector(".btn__bars");
  $btnBars.addEventListener("click", () => {
    $menu.classList.toggle("menu__active");
  });
}
