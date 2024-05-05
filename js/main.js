import { getCharacters } from "./api.js";
import { buildCharacters } from "./built.js";
import { menu } from "./menu.js";

menu();
let $seeMore = document.querySelector(".see__more");

async function loadCharacters() {
  try {
    const characters = await getCharacters();
    buildCharacters(characters);
  } catch (error) {
    console.error(error);
  }
}

loadCharacters();

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
