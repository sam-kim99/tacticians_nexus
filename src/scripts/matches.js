const myApiKey = 'RGAPI-b1e74848-5c0e-4a5c-ac67-49152965740f';

let myPuuid = '';

export async function getPuuid(username) {
  const tagStartIdx = username.indexOf('#');
  const gameName = encodeURIComponent(username.slice(0, tagStartIdx));
  const tagName = username.slice(tagStartIdx + 1);

  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagName}`;

  try {
      const response = await fetch(apiUrl, {
          headers: {
            // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            // "Accept-Language": "en-US,en;q=0.9",
            // "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            // "Origin": "https://developer.riotgames.com",
            'X-Riot-Token': myApiKey 
          }
      });

      if (!response.ok) {
          throw new Error(`Unable to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      myPuuid = data.puuid
      return getMatches(myPuuid);
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}


async function getMatches(puuid) {
  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=10`
  try {
        const response = await fetch(apiUrl, {
        headers: {
            'X-Riot-Token': myApiKey
        }
        });

        if (!response.ok) {
            throw new Error(`Unable to fetch data. Status: ${response.status}`);
        }

        const matches = await response.json();
        for (let match of matches) {
            getMatchInfo(match);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function getMatchInfo(matchID) {
  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/${matchID}`

  try {
        const response = await fetch(apiUrl, {
        headers: {
            'X-Riot-Token': myApiKey
        }
        });

        if (!response.ok) {
            throw new Error(`Unable to fetch data. Status: ${response.status}`);
        }

        const matchObject = await response.json();
        let currentPlayer = findcurrentPlayer(matchObject);
        buildMatch(currentPlayer)
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function findcurrentPlayer(matchObject) {
    const matchParticipants = matchObject['info']['participants']
    for (let player in matchParticipants) {
        let currentPlayer = matchParticipants[player];
        if (myPuuid === currentPlayer.puuid) {
            return currentPlayer;
        }
    }
}

function buildMatch(player) {
    const matchesDiv = document.querySelector('.matches');
    const matchDiv = document.createElement('div');
    matchDiv.classList = 'match';
    const matchInfoDiv = document.createElement('div');
    matchDiv.classList = 'match-info';
    const tactitianIconDiv = document.createElement('div');
    tactitianIconDiv.id = 'tac-icon';
    const placeFinishedDiv = document.createElement('div');
    placeFinishedDiv.id = 'final-placement';
    const stageFinishedDiv = document.createElement('div');
    stageFinishedDiv.id = 'final-stage';
    const traitsFinishedDiv = document.createElement('div');
    traitsFinishedDiv.id = 'active-traits';
    const unitsFinishedDiv = document.createElement('div');
    unitsFinishedDiv.id = 'final-board';

    // Get Tactitian Icon
    const tactitianIcon = document.createElement('img');
    tactitianIcon.src = `https://cdn.metatft.com/file/metatft/tacticians/${player['companion']['content_ID']}.png`
    tactitianIconDiv.appendChild(tactitianIcon);
    matchInfoDiv.appendChild(tactitianIconDiv);

    // Get Placement Finished
    const placeFinished = document.createElement('span');
    placeFinished.innerText = player['placement'];
    placeFinishedDiv.appendChild(placeFinished);
    matchInfoDiv.appendChild(placeFinishedDiv);

    // Get Last Round Played (Stage Finished)
    const stageFinished = document.createElement('span');
    stageFinished.innerText = convertLastRound(player['last_round'])
    stageFinishedDiv.appendChild(stageFinished);
    matchInfoDiv.appendChild(stageFinishedDiv);

    // Get Active Traits
    const activeTraits = fetchTraits(player['traits'])
    traitsFinishedDiv.appendChild(activeTraits);
    matchInfoDiv.appendChild(traitsFinishedDiv);

    // Get Units Finished
    const finalUnits = fetchUnits(player['units']);
    unitsFinishedDiv.appendChild(finalUnits);
    matchInfoDiv.appendChild(unitsFinishedDiv);

    matchDiv.appendChild(matchInfoDiv);
    matchesDiv.appendChild(matchDiv);

}

function convertLastRound(lastRound) {
    return (Math.floor((lastRound - 4)/ 7) + 2) + '-' + (((lastRound - 4) % 7))
}

function fetchTraits(traits) {
    const allTraits = document.createElement('div');
    for (let trait of traits) {
        if (trait['tier_current'] >= 1) {
        const traitItem = document.createElement('div');
        const traitIcon = document.createElement('div');
            traitItem.id = 'tier-' + trait['tier_current'];
            traitIcon.id = trait['name'].slice(6);
            // Placeholder
            traitIcon.innerText = trait['name'].slice(6);
            //
            traitItem.appendChild(traitIcon);
            allTraits.appendChild(traitItem);
        }
    }
    return allTraits;
}

function fetchUnits(units) {
    const allUnits = document.createElement('div');
    for (let unit of units) {
        const unitItem = document.createElement('div');
        const unitIcon = document.createElement('div');
        const unitName = unit['character_id'].slice(6);
        const unitImg = document.createElement('img');
        
        unitImg.src = `./assets/images/splashes-square/${unitName}.jpg`
        unitIcon.appendChild(unitImg);
        unitItem.appendChild(unitIcon);
        allUnits.appendChild(unitItem);
    }
    return allUnits;
}

export function clearCurrentPlayer() {
    const matchesDiv = document.querySelector('.matches');
    matchesDiv.innerHTML = '';
    // for (let child of matchesDiv.children) {
    //   child.remove();
    // }
  };