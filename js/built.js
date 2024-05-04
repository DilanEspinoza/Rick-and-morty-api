export function buildCharacters(characters) {
  let $containerCharacters = document.querySelector(".container__characters");
  characters.forEach((character) => {
    let containerCharacter = document.createElement("article");
    containerCharacter.classList.add("container_character");
    containerCharacter.innerHTML = `
        <div class="character">
            <img src="${character.image}" alt="" />
            <div class="character__description">
            <h2 class="character__name">${character.name}</h2>
            <p class="character__status">
                <span><i class="fa-solid fa-circle"></i></span>
                ${character.status} - ${character.species}
            </p>
            <div class="character__wrapper">
                <p class="character__info">Last known location:</p>
                <h3 class="character__location">Citadel of Ricks</h3>
            </div>
            <div class="character__wrapper">
                <p class="character__info">First seen in:</p>
                <h3 class="character__location">Earth (C-137)</h3>
            </div>
            <h3></h3>
            </div>
      </div>

`;
    $containerCharacters.appendChild(containerCharacter);
  });
}
