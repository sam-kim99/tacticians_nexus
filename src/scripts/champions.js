// Fetch JSON file from CommunityDragon
export async function fetchChampionInfo() {
    try {
        const response = await fetch('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
        if (!response.ok) {
            throw new Error('Failed to fetch champion info');
        }
        const champInfo = await response.json();
        displayChampionInfo(champInfo);
    } catch (error) {
        console.error('Error fetching champion:', error);
    }
}

function displayChampionInfo(champInfo) {
    const champDiv = document.querySelector('.champions');
    // This is necessary because the JSON file is unorganized.
    const champData = champInfo['setData'][4];
    const championsByCost = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    };
    
    champData['champions'].forEach(champObj => {
        if (champObj['characterName'].includes('TFT10') && champObj['cost'] >= 1 && champObj['cost'] <= 5) {     
            // Push champion object into its appropriate cost tier
            championsByCost[champObj['cost']].push(champObj);
        }
    });
    
    
    for (let cost = 1; cost <= 5; cost++) {
        const champions = championsByCost[cost];
        if (champions.length > 0) {
            const costContainer = createCostContainer(cost);

            const containerText = document.createElement('h2');
            containerText.innerText = `${cost}-cost`;
            champDiv.appendChild(containerText);

            champDiv.appendChild(costContainer);
            champions.forEach(champObj => {
                const champContainer = createChampionContainer(champObj);
                costContainer.appendChild(champContainer);
            })
        }
    }
}

function createCostContainer(cost) {
    const costContainer = document.createElement('div');
    costContainer.classList.add(`${cost}-cost`);
    return costContainer;
}

function createChampionContainer(champObj) {
    const champContainer = document.createElement('div');
    const champName = document.createElement('div');
    const champTraits = document.createElement('div');
    const champCost = document.createElement('div');
    const champImgLink = document.createElement('a');
    const champImg = document.createElement('img');

    // Attach each trait to the champion's div 
    champTraits.id = 'traits';
    for (let trait of champObj['traits']) {
        const subTrait = document.createElement('img');
        const traitText = trait.split('/').join('');
        subTrait.id = traitText;
        subTrait.src = './assets/images/trait-icons/' + `${traitText.toLowerCase()}.png`;
        champTraits.appendChild(subTrait);
    }

    // Due to the fact that there is ONLY one pair of dupes this set, 
    // conditionals need to be made todifferentiate between the two.
    const currentTraits = champTraits.getElementsByTagName('img');
    for (let i = 0; i < currentTraits.length; i++) {
        const img = currentTraits[i];
        if (img.id.includes('KDA') && champObj['name'] === 'Akali') {
            champContainer.id = 'Akali_KDA';
            champName.id = 'Akali_KDA';
            champName.innerText = 'Akali (KDA)';
            break;
        } else if ((img.id.includes('True Damage') && champObj['name'] === 'Akali')) {
            champContainer.id = 'Akali_TD';
            champName.id = 'Akali_TD';
            champName.innerText = 'Akali (True Damage)';
            break;
        } else {
            champContainer.id = champObj['name'];
            champName.id = champObj['name'];
            champName.innerText = champObj['name'];
        }
    }

    // Set the ID and inner text of champCost to be the champion's cost
    // So that I can manipulate it separately
    champCost.id = `${champObj['cost']}_cost`;
    champCost.innerText = champObj['cost'];

    // Link each champion's image to their own page
    // Edge case in conditional due to the fact that this set has one pair of dupes
    champImgLink.id = 'splash';
    champImgLink.target = '_blank';
    if (champObj['apiName'].includes('TrueDamage')) {
        champImgLink.href = 'https://mobalytics.gg/tft/champions/akali-true-damage'    
    } else {
        champImgLink.href = 'https://mobalytics.gg/tft/champions/' + `${champObj['name'].toLowerCase()}`
    }

    // Link each image source with the champion name from splashes folder
    champImg.id = 'img';
    champImg.src = './assets/images/splashes/' + `${champName.id}.jpg`;

    champImgLink.appendChild(champImg);
    champContainer.appendChild(champImgLink);
    champContainer.appendChild(champName);
    champContainer.appendChild(champTraits);
    champContainer.appendChild(champCost);
    champContainer.appendChild(document.createElement('br'));
    
    return champContainer;

}