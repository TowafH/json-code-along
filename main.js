/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */
console.log(pokemon);
console.log(pokemon[0].name);
console.log(pokemon[0].type); // Outputs an Array of ['grass', 'poision']
console.log(pokemon[0].type[0]); // Outputs a String of the first Array value

/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */




/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */

let randomBtn = document.getElementById("random_btn");

function changePokemon() {
    //Select a random Pokemon
    let starterIndex = Math.floor(Math.random() * pokemon.length); // 0 - 23
    console.log(starterIndex);

    let selectedPokemon = pokemon[starterIndex];

    let nameHeading = document.getElementById("poke_name"); //Select elements
    nameHeading.innerText = `${selectedPokemon.id} - ${selectedPokemon.name} `; //Displays on the Page

    let pokeImg = document.querySelector("#poke_img"); // ID's can be selected using querySelector
    //Object name is 'turtwig' // '.image' is a property // [1] is used to access an Image from the array in data.js for the 'turtwig' object
    pokeImg.src = selectedPokemon.image[0]; //Display the new Image, indexing the Array.

    let types = document.getElementById("poke_types");
    types.innerText = selectedPokemon.type[0];

              // Select all of the divs within #poke_stats
    let statsDiv = document.querySelectorAll("#poke_stats div");
    for (let i = 0; i < statsDiv.length; i++){ // Looks at all of the div's for each stat
    //Get current ID of the div being looked at
    //if the id of the div is "hp" , stat = hp
    let stat = statsDiv[i].id;
    console.log(stat);

    //ex: hp.style.width = `${turtwig.base[hp] * 4}px
    statsDiv[i].style.width = `${selectedPokemon.base[stat] * 4}px`
}
}

randomBtn.addEventListener("click", changePokemon)