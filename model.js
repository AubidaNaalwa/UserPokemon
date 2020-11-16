const Model = () => {
    let data = {}
    const loadFriends = () =>{
        data["friends"] = [];
        const pasrse =  $.ajax({
            method:'get',
            url:`https://randomuser.me/api/?page=3&results=10`,
            async: false
            
        });
        const result = JSON.parse(pasrse["responseText"])
        for(let i = 0 ; i< 7; i++)
            data["friends"].push({ first : result.results[i]["name"]["first"],last :  result.results[i]["name"]["first"]})
    } 
    const loadUserFromApi =() => {

        const pasrse =  $.ajax({
            method:'get',
            url:`https://randomuser.me/api/`,
            async: false
            
        });
        const result = JSON.parse(pasrse["responseText"])
        
        data["name"] = result.results[0]["name"] || "";
        data["city"] = result.results[0]["location"]["city"] || "";
        data["country"] = result.results[0]["location"]["country"] || "";
        data["picture"] = result.results[0][`picture`][`large`] || result.results[0][`picture`][`medium`] || ""
    }

    const loadQoute = () => {
        

        const result =  $.ajax({
            method: 'get',
            url:`
            `,
            async: false
           
        });
        const pasrse = JSON.parse(result["responseText"])
        data["quote"] = pasrse.quote
    }

    const loadPokemon =  (i) => {
        i = (i % 893)+1

        const pasrse = $.ajax({
            method: 'get',
            url:`https://pokeapi.co/api/v2/pokemon/${i}/`,
            async: false
        });
        const result = JSON.parse(pasrse["responseText"])
        data["pokemonName"] = result["name"]     
        data["imgUrl"] =  result["sprites"]["other"]["dream_world"]["front_default"]

    }

    const loadBig = () =>{

        const pasrse =  $.ajax({
            method: 'get',
            url:`https://baconipsum.com/api/?type=meat-and-filler`,
            async: false
        });
    
        const result = JSON.parse(pasrse["responseText"])
        data["aboutMe"] = result[0]

    }
    
    const loadElementsRandomaly = () => {
        loadQoute();
        loadPokemon(Math.floor(Math.random() * 893))
        loadBig()
        loadUserFromApi()
        loadFriends();
        return data;
    }

    return{
        loadElementsRandomaly
    }
}