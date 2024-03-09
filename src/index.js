import { fetchChampionInfo } from "./scripts/champions";
import { originTraits, test } from "./scripts/traits";

document.addEventListener('DOMContentLoaded', function() {
    fetchChampionInfo();
    test(originTraits);
});