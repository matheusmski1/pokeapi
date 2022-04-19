const pokeApi = require("../../../utils/pokeApi")

module.exports.handler = async (event, context, callback) => {
    
    const a = new pokeApi
    return a.getPokemons() 
 
}
