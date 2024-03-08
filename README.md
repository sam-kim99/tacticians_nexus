# Tactician's Nexus

[Teamfight Tactics](https://teamfighttactics.leagueoflegends.com/en-us/) (TFT) ) is an auto-battler free-for-all game renowned for its depth of strategy. As a tactician, your role is pivotal in assembling a formidable team amidst the unpredictability of chance. Utilizing your gold, you strategically acquire champions, craft items, and tactically position your formidable roster on the board to engage other tacticians in fierce battles.

What distinguishes TFT, beyond its vibrant artwork and engaging gameplay, is its dynamic rotation of "Sets." Every four months, a new "Set" is introduced, showcasing fresh champions, traits, and mechanics. This perpetual evolution ensures the game remains dynamic and captivating. With each new set, players must adapt their strategies to the evolving meta, fostering a continuous cycle of innovation and challenge.

Yet, as each new set emerges, it also bids farewell to the past, potentially overwhelming players as they navigate the ever-changing landscape. Tactician's Nexus seeks to address this challenge by consolidating all pertinent information regarding the upcoming Set into an all-in-one infographic. This resource aims to streamline the learning process, empowering users to swiftly grasp the nuances of the new set and embark on their TFT journey with confidence.

## Wireframe: 

![TN Wireframe](./assets/wireframe/tn_wireframe.png)

* Implements a fixed navigation bar featuring distinct header links designed to seamlessly navigate users to corresponding sections on the page.
* Utilizes grids to systematically present detailed information encompassing names, descriptions, and visual representations of various traits, champions, augments, and items.
* Concludes with a comprehensive grid showcasing images of item components alongside exhaustive combinations for each item, with a hover feature offering supplementary details.

## Functionality & MVPs

### In Tactician's Nexus, users are able to:

* Interact with a carousel that cycles through all the new background sounds that will be introduced in Set 10: Remix Rumble.
* Use the fixed nav-bar to quickly move around the page to their desired location to learn about new features of the Set.
* Click on any Champion from any grid to learn more about their abilities, mana cost, and traits
* Hover over items in the Grid of Items to see a brief description

### In addition, this project includes:

* This production README

## Technologies, Libraries, APIs:
This project implements the following technologies:

* The Riot Games Data Dragon API for TFT: https://developer.riotgames.com/docs/tft#data-dragon_versions .
* Webpack to bundle and transpile source JavaScript code.
* npm to manage project dependencies

## Implementation Timeline:

* Friday Afternoon & Weekend: Setup initial files for project. Map out the necessary information for each class and create Trait, Champion, Augment, and Item classes. Fetch data from the Riot API to create all instances. Ensure that each champion image properly redirects to that champion's info page.

* Monday: Create general structure of web page, separating the page properly for each class and incorporating a baseline grid. Populate each grid with its respective data with a heavy focus on styling. 

* Tuesday: Create item grid and functionality, adding the hover feature to show additional information. Incorporate fixed navbar with links that redirect to different parts of the page.

* Wednesday: Implement carousel feature for new music for the set.

* Thursday Morning: Deploy to Github.

## Future Implementations:

* Add team builder functionality that utilizes a drag and drop to allow users to create own variations of a team composition.
* Use same API to incorporate Augment statistics, showing which augments are favorable in current meta.
