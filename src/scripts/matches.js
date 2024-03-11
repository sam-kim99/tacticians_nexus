const myApiKey = 'RGAPI-25262a84-ff50-4e82-a378-f9d01e05c6bc';
const fetchUsername = document.querySelector('#search');
const userInput = document.querySelector('#search-riot-id');

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
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      
      return getMatches(data.puuid);
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
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
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
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const matchInfo = await response.json();
        // figure out what to do with match info
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// fetchUsername.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(userInput)
//     // getPuuid(userInput.value);
// })