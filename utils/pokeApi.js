'use strict'

const Axios = require('axios')

module.exports = class pokeApi{

  constructor() {
    const pokeApiUrl = "https://pokeapi.co/api/v2/";
    this.request = Axios.create({baseURL: pokeApiUrl});
  }

  async getPokemons(){
    const method = 'get'
    const url = '/pokemon/?limit=100'
    const response = await this.request({method, url})
    
    return response.data
    }   

}

