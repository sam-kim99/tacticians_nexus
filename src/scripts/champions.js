export function fetchChampionInfo() {
    return fetch('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to fetch champion info');
            }
        })
        .then(champInfo => {
            const parentChamp = document.querySelector('.champions');
            const setData = champInfo['setData'];
            const champData = setData[4];
            const championsByCost = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            };

            champData['champions'].forEach(champObj => {
                if (champObj['characterName'].includes('TFT10') && champObj['cost'] >= 1 && champObj['cost'] <= 5) {
                    championsByCost[champObj['cost']].push(champObj);
                }
            });


            for (let cost = 1; cost <= 5; cost++) {
                const champions = championsByCost[cost];

                if (champions.length > 0) {

                    const costContainer = document.createElement('div');
                    costContainer.classList.add(`${cost}-cost`);

                    const containterText = document.createElement('h2')
                    containterText.innerText = `${cost} Cost`;
                    parentChamp.appendChild(containterText);
                    
                    
                    champions.forEach(champObj => {
                        const champContainer = document.createElement('div');
                        const champName = document.createElement('div');
                        const champTraits = document.createElement('div');
                        const champCost = document.createElement('div');
                        const champImg = document.createElement('img');

                        
                        champContainer.id = champObj['name'];
                        champName.id = champObj['name'];
                        champName.innerText = champObj['name'];

                        champTraits.id = 'traits';
                        for (let trait of champObj['traits']) {
                            const subTrait = document.createElement('img');
                            const traitText = trait.split('/').join('');
                            subTrait.id = traitText;
                            subTrait.src = './assets/images/trait-icons/' + `${traitText.toLowerCase()}.png`;
                            champTraits.appendChild(subTrait);
                        }

                        champCost.id = `${champObj['cost']}_cost`;
                        champCost.innerText = champObj['cost'];

                        champImg.id = 'img';
                        champImg.src = '';

                        champContainer.appendChild(champName);
                        champContainer.appendChild(champTraits);
                        champContainer.appendChild(champCost);
                        champContainer.appendChild(document.createElement('br'));
                        
                        costContainer.appendChild(champContainer);
                    });
                    
                    parentChamp.appendChild(costContainer);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching champion info:', error);
        });
}