const pokemonTypeURL = "https://pokeapi.co/api/v2/type/";
let pokemonData = []

// const pokemonSearchURL = 'https://pokeapi.co/api/v2/pokemon' + 'pokemonName'

// console.log(pokemonSearchURL);

const NameURLMap = {}

let filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", fetchPokemonOnType);


console.log(pokemonData);

function pokemonCardColor(type) {

    
    if(type == "grass")
        return "rgb(160,207,89)";

    if(type == "fire")
        return "rgb(253,132,47)";

    if(type == "water")
        return "rgb(78,152,199)";
        // return "lightblue";

    if(type == "bug")
        return "rgb(121,164,73)";

    if(type == "poison")
        return "rgb(189,134,204)";

    if(type == "electric")
        return "rgb(239,215,63)";

    if(type == "normal")
        return "rgb(169,176,179)";

    if(type == "ground")
        return "rgb(247,224,73)";   

    if(type == "fairy")
        return "rgb(253,189,234)";

    if(type == "fighting")
    return "rgb(215,111,46)";

    if(type == "psychic")
    return "rgb(244,110,189)";

    if(type == "rock")
    return "rgb(168,146,44)";

    if(type == "ghost")
    return "rgb(130,106,168)";

    if(type == "ice")
    return "rgb(90,199,232)";

    if(type == "dragon")
    return "rgb(220,170,43)";

}

async function loader() {
    await fetchPokemonType()
    await fillPokemon()
    // await pokemonData()
    await defaultScreen()
}

function defaultScreen() {

    const searchResultContainer = document.getElementById("search-result-container");

    searchResultContainer.innerHTML = ''

    for (let i = 1; i < pokemonData.length; i++) {

        const pokemonCard = document.createElement("div")
        const pokemonCardOneNumberDiv = document.createElement("div")
        const pokemonCardOneNumberPara = document.createElement("p")
        const pokemonCardSTwoImageDiv = document.createElement("div")
        const pokemonCardTwoImageImg = document.createElement("img")
        const pokemonCardThreeNameDiv = document.createElement("div") 
        let pokemonCardThreeNameSpan = document.createElement("p") 
        const pokemonCardFourTypeDiv = document.createElement("div")
        const pokemonCardFourTypePara = document.createElement("p")

        pokemonCard.style.backgroundColor = pokemonData[i].color;

        pokemonCardOneNumberPara.innerText = "#" + (i);
        pokemonCardTwoImageImg.setAttribute("src",  pokemonData[i].frontImageUrl);
        pokemonCardTwoImageImg.style.scale = "1.7";
        pokemonCardThreeNameSpan = pokemonData[i].name;
        pokemonCardFourTypePara.innerText = pokemonData[i].type;





        // ADD CSS
        pokemonCard.classList.add("pokemonCard");
        pokemonCardOneNumberDiv.classList.add("pokemonCardOneNumberDiv");
        pokemonCardOneNumberPara.classList.add("pokemonCardOneNumberPara");
        pokemonCardSTwoImageDiv.classList.add("pokemonCardTwoImageDiv");
        // pokemonCardTwoImageImg.classList.add("pokemonCardSTwoImageImg");
        pokemonCardThreeNameDiv.classList.add("pokemonCardThreeNameDiv");
        // pokemonCardThreeNameSpan.classList.add("pokemonCardThreeNameSpan");
        pokemonCardFourTypeDiv.classList.add("pokemonCardFourTypeDiv");
        pokemonCardFourTypePara.classList.add("pokemonCardFourTypePara");

        // console.log(pokemonCardOneNumberPara);

        // ADD CSS


        // appending all  the elements to the main container
        pokemonCardOneNumberDiv.append(pokemonCardOneNumberPara)

        pokemonCardSTwoImageDiv.append(pokemonCardTwoImageImg)

        pokemonCardThreeNameDiv.append(pokemonCardThreeNameSpan)

        pokemonCardFourTypeDiv.append(pokemonCardFourTypePara)

        pokemonCard.append(pokemonCardOneNumberDiv, pokemonCardSTwoImageDiv, pokemonCardThreeNameDiv, pokemonCardFourTypeDiv)
        searchResultContainer.append(pokemonCard)
        // appending all  the elements to the main container


    // console.log(pokemonName, pokemonURL);    


        
    }
}

// async function fillPokemon() {

//     for (let i = 1; i < 1026; i++) {
        
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//     const res = await response.json()

//     // console.log(res);

//     pokemonData[i] = {
//         name: res.name,
//         height: res.height,
//         weight: res.weight,
//         type: res.types[0].type.name,
//         // secondType: res.types[1].type.name,
//         frontImageUrl: res.sprites.front_default,
//         backImageUrl: res.sprites.back_default,
//         color: pokemonCardColor(res.types[0].type.name)
//         // generation: res.sprites.versions.generation-i
//     }
//     }
// }

async function fetchPokemonData(pokemonURL) {
    const response = await fetch(pokemonURL)

    res = await response.json();

    console.log(res);   
    // pokemonData = res.
    
    return res.sprites.front_default

}

async function fetchPokemonOnType() {
    const selectValue = document.getElementById("pokemon-types").value;
    // console.log(selectValue);
    // console.log(NameURLMap[selectValue]);

    const response = await fetch(NameURLMap[selectValue])
    const res = await response.json()

    const pokemonData = res.pokemon;
    console.log(res);

    const pokemonListLength = pokemonData.length > 30 ? 30 : pokemonData.length

    const searchResultContainer = document.getElementById("search-result-container");

    searchResultContainer.innerHTML = ''




    for (let i = 0; i < pokemonListLength; i++) {
        const pokemon = pokemonData[i].pokemon;
        const pokemonName = pokemon.name;
        // console.log(pokemonName);
        const pokemonURL = pokemon.url; 
        // let imageSrcData = ' '
        
        const imageSrc = await fetchPokemonData(pokemonURL)
        // const imageSrc = await response.json()

        // console.log(imageSrc);
    

        const pokemonCard = document.createElement("div")
        const pokemonCardOneNumberDiv = document.createElement("div")
        const pokemonCardOneNumberPara = document.createElement("p")
        const pokemonCardSTwoImageDiv = document.createElement("div")
        const pokemonCardTwoImageImg = document.createElement("img")
        const pokemonCardThreeNameDiv = document.createElement("div") 
        let pokemonCardThreeNameSpan = document.createElement("p") 
        const pokemonCardFourTypeDiv = document.createElement("div")
        const pokemonCardFourTypePara = document.createElement("p")

        // pokemonCard.style.backgroundColor = pokemonData[i].color;
        pokemonCard.style.backgroundColor = pokemonData[i].color;
        // console.log(pokemonData);

        pokemonCardOneNumberPara.innerText = "#" + (i+1);
        // pokemonCardTwoImageImg = await fetchPokemonData(pokemonURL)
        pokemonCardTwoImageImg.style.scale = "1.7";
        pokemonCardThreeNameSpan = pokemonName;
        pokemonCardFourTypePara.innerText = selectValue;

        pokemonCardTwoImageImg.setAttribute("src",  imageSrc);




        // ADD CSS
        pokemonCard.classList.add("pokemonCard");
        pokemonCardOneNumberDiv.classList.add("pokemonCardOneNumberDiv");
        pokemonCardOneNumberPara.classList.add("pokemonCardOneNumberPara");
        pokemonCardSTwoImageDiv.classList.add("pokemonCardTwoImageDiv");
        // pokemonCardTwoImageImg.classList.add("pokemonCardSTwoImageImg");
        pokemonCardThreeNameDiv.classList.add("pokemonCardThreeNameDiv");
        // pokemonCardThreeNameSpan.classList.add("pokemonCardThreeNameSpan");
        pokemonCardFourTypeDiv.classList.add("pokemonCardFourTypeDiv");
        pokemonCardFourTypePara.classList.add("pokemonCardFourTypePara");

        // console.log(pokemonCardOneNumberPara);

        // ADD CSS


        // appending all  the elements to the main container
        pokemonCardOneNumberDiv.append(pokemonCardOneNumberPara)

        pokemonCardSTwoImageDiv.append(pokemonCardTwoImageImg)

        pokemonCardThreeNameDiv.append(pokemonCardThreeNameSpan)

        pokemonCardFourTypeDiv.append(pokemonCardFourTypePara)

        pokemonCard.append(pokemonCardOneNumberDiv, pokemonCardSTwoImageDiv, pokemonCardThreeNameDiv, pokemonCardFourTypeDiv)
        searchResultContainer.append(pokemonCard)
        // appending all  the elements to the main container


    // console.log(pokemonName, pokemonURL);    

    };


}

async function fetchPokemonType() {

    const response = await fetch(pokemonTypeURL)
    const res = await response.json()

    console.log(res);

    const select = document.getElementById("pokemon-types");

    select.style.fontFamily = '"Single Day", cursive';
    select.style.fontWeight = "400";
    select.style.fontStyle = "normal";
    select.style.fontSize = "1.5em";
    select.style.textTransform = "capitalize";
    
    for (let i = 0; i < res.results.length; i++) {
        const type = res.results[i];
        const typeName = type.name;
        const typeURL = type.url;
        NameURLMap[typeName] = typeURL
        const option = document.createElement('option');
        option.innerText = typeName;

        // const firstChild = document.getElementById("first-child");

        // const response = await fetch(pokemonTypeURL)
        // const res = response.json()

        // console.log(res)

        option.setAttribute("value", typeName);
        option.setAttribute("data-url", typeURL);
        // firstChild.append(option)
        select.append(option)


        // console.log(NameURLMap); 
    }
}


async function fillPokemon() {

    for (let i = 1; i < 1026; i++) {
        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const res = await response.json()

    // console.log(res);

    pokemonData[i] = {
        name: res.name,
        height: res.height,
        weight: res.weight,
        type: res.types[0].type.name,
        // secondType: res.types[1].type.name,
        frontImageUrl: res.sprites.front_default,
        backImageUrl: res.sprites.back_default,
        color: pokemonCardColor(res.types[0].type.name)
        // generation: res.sprites.versions.generation-i
    }
    }
}