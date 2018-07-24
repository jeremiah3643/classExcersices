const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

planets.forEach(planet => {
  let planetWriter = document.createElement("p")
  planetWriter.innerHTML = `${planet}`
  planetEl.appendChild(planetWriter)
  });

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const upperPlanet = planets.map(function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);})


    upperPlanet.forEach(planet => {
        let planetWriter = document.createElement("p")
        planetWriter.innerHTML = `${planet}`
        planetEl.appendChild(planetWriter)
        });

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


    const filteredPlanets = planets.filter(() => {
planets.includes('e' || "E");
    })

           

console.log(filteredPlanets)
// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]