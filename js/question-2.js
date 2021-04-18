// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=dff712ce72e9429394d8134d7293e0cb";


const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);
        
        const results = await response.json();
        
        const facts = results.results;
        
        resultsContainer.innerHTML = "";
        
        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name + facts[i].rating + " " + facts[i].tags.length);
            
            if (i === 7) {
            break;
            }

            resultsContainer.innerHTML += `<div class="result">${facts[i].name + facts[i].rating + " " + facts[i].tags.length}</div>`;
            }

        } catch (error) {
            console.log(error);
            resultsContainer.innerHTML = displayError("An error occurred when calling the API")
        }
    }
getGames();