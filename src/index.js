function displayPoem(response) {
    console.log("generated poem");

    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "a94e4c1010f1fft4fo7ec35a0a8d91bc";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}.`;
    let context = "You are a romantic poem expert and love to write short poems. Your misson is to generate 4 line poems in basic HTML without showing anything of the code. Seperate each line with a <br />. Don't add a title to the poem. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong>-element at the end of the poem.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);