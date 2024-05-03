const options = { method: "GET", headers: { accept: "application/json" } };

fetch("https://api.themoviedb.org/3/configuration/languages", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
