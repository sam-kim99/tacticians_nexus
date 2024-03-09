import { fetchChampionInfo } from "./scripts/champions";
import { originTraits, createTraits, classTraits } from "./scripts/traits";

document.addEventListener('DOMContentLoaded', function() {
    fetchChampionInfo();
    createTraits(originTraits);
    createTraits(classTraits);
});