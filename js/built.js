let $containerCharacters = document.querySelector(".container__characters");
export default $containerCharacters;

export function buildCharacters(characters) {
  characters.forEach((character) => {
    let containerCharacter = document.createElement("article");
    containerCharacter.classList.add("container_character");
    containerCharacter.innerHTML = `
      <div class="character">
          <img src="${character.image}" alt="" />
          <div class="character__description">
          <h2 class="character__name">${character.name}</h2>
          <p class="character__status__${character.status}">
              <span><i class="fa-solid fa-circle"></i></span>
              ${character.status} - ${character.species}
          </p>
          <div class="character__wrapper">
              <p class="character__info">Last known location:</p>
              <h3 class="character__location">${character.location.name}</h3>
          </div>
          <div class="character__wrapper">
              <p class="character__info">First seen in:</p>
              <h3 class="character__location">${character.origin.name}</h3>
          </div>
          <h3></h3>
          </div>
    </div>
`;
    $containerCharacters.appendChild(containerCharacter);
  });
}

export function buildErrorCharacters(messageError = "Not found") {
  let containerCharacter = document.createElement("article");
  containerCharacter.classList.add("container_character");
  containerCharacter.innerHTML = messageError;
  return $containerCharacters.appendChild(containerCharacter);
}
