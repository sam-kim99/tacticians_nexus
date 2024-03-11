import { fetchChampionInfo } from "./scripts/champions";
import { originTraits, createTraits, classTraits } from "./scripts/traits";
import { getPuuid } from "./scripts/matches.js"

document.addEventListener('DOMContentLoaded', function() {
    fetchChampionInfo();
    createTraits(originTraits);
    createTraits(classTraits);

    const fetchUsername = document.querySelector('#search');
    const userInput = document.querySelector('#search-riot-id');

    fetchUsername.addEventListener('submit', e => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("User input:", userInput.value); // Log the user input
        getPuuid(userInput.value); // Call your custom function to handle form submission
    });
});