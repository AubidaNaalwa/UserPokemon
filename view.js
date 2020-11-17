const View = () =>{

    const render = (data) =>  {
        if(data === undefined){
            return
        }
        $(`#picture`).empty();
        $(`#picture`).append(`<img src="${data.picture}" alt="profilePicture">`)
        $(`#name`).empty();
        $(`#name`).append(`<p>${data.name["first"]} ${data.name["last"]}</p>`);
        $(`#location`).empty();
        $(`#location`).append(`<p>${data["city"]}, ${data["country"]}</p>`)
        $(`#qoute`).empty();
        $(`#qoute`).append(`<p>${data["quote"]}</p>`)
        $(`#aboutMeResponse`).empty();
        $(`#aboutMeResponse`).append(`<p>${data["aboutMe"]}</p>`)
        $(`#pokemon`).empty();
        $(`#pokemon`).append(`<img src="${data["imgUrl"]}" alt="PokemonPicture"> <span>favourite Pokemon : ${data[`pokemonName`]}</span>`)
        $(`#friends`).empty();
        $(`#friends`).append(`<p>Friends : </p>`)
        for(let i of data.friends) {
            $(`#friends`).append(`<p>${i.first} ${i.last}</p>`)
        }
    }
    return {
        render
    }

}