async function start() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromise.json();
  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature").textContent = ourTemperature;
  console.log(ourTemperature);
}

start();

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  console.log(petsData);
  petsData.forEach((pet) => {
    console.log(pet.species);
  });
}

petsArea();
