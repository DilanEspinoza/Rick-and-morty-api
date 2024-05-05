import { getFilterCharacters } from "./api.js";
import $containerCharacters, {
  buildCharacters,
  buildErrorCharacters,
} from "./built.js";

function filterSearch() {
  let $inputSearch = document.querySelector(".search__characters");
  let $form = document.getElementById("container__search__characters");
  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let { value } = $inputSearch;
    let filterCharacters = await getFilterCharacters(value);
    $containerCharacters.innerHTML = "";

    if (filterCharacters == undefined) buildErrorCharacters();
    buildCharacters(filterCharacters);
  });
}

filterSearch();
