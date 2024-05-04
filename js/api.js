const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters(page = 1) {
  let response = await fetch(`${API_URL}/?page=${page}`);
  let data = await response.json();
  return data.results;
}
