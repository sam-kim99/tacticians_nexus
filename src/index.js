fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-trait.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw response
        }
    })
    .then(data => {
        let imageUrl = './assets/images/trait-icons/8bit.png';
        document.getElementById('8bit-image').src = imageUrl;
    })
    .catch(errorResponse => console.error(errorResponse));


