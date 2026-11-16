/*
    COMP-2230 Hackathon 2: Joker API

    Webpage that fetches and displays jokes from the JokeAPI.
    
    Jaskeerat Singh,
    Duncan Cameron, 
    Sukhmanjit Kaur

    Nov 16, 2026
*/

// Change URL based on parameters you wish to use
const jokeFetchURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const button = document.getElementById("Findjokes");
const jokeContainer = document.getElementById("jokeContainer");
document.body.appendChild(jokeContainer);


const insertJoke = async () => {
    try {
        const response = await fetch(jokeFetchURL);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const p = document.createElement("p");

        // Checks if the joke is single or 2-part in order to display properly
        if (data.type === "single") {
            p.textContent = data.joke;
        }else{
            p.textContent = `${data.setup} - ${data.delivery}`;
        }

        jokeContainer.innerHTML = ""; // Clears the previous joke
        jokeContainer.appendChild(p); // Adds the fetched joke
    }
    catch (error) {
        console.error("Error fetching joke:", error);
        jokeContainer.innerHTML = "<p>Failed to fetch joke. Please try again later.</p>";
    }
}

// Shows joke upon button click
button.addEventListener("click", insertJoke);