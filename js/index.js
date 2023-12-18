console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log("r2d2s eyes: ", data.results[2].eye_color);
  const allNames = data.results.map((character) => character.name);
  console.log("all names: ", allNames);
  return data;
}

fetchData();
