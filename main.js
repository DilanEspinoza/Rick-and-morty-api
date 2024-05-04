import { getCharacters } from "./js/api.js";
import { buildCharacters } from "./js/built.js";
// import { nextPage, backPage } from "./js/page.js";

let $seeMore = document.querySelector(".see__more");

async function cargarPersonajes() {
  try {
    const characters = await getCharacters();
    buildCharacters(characters);
  } catch (error) {
    console.error(error);
  }
}

cargarPersonajes();
let count = 2;
$seeMore.addEventListener("click", async function () {
  const nextCharacters = await getCharacters(count++);
  buildCharacters(nextCharacters);
  var scrollAmount = 325;
  var currentPosition = document.documentElement.scrollTop;
  var newPosition = currentPosition + scrollAmount;
  window.scrollTo({
    top: newPosition,
    behavior: "smooth",
  });
});
