import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "../Services/AxiosService.js";
import { wildPokeService } from "../Services/WildPokeService.js";


function _drawPokemon(){
  let template = ''
  ProxyState.pokemon.forEach(p => template += `
  <li onclick="app.wildPokeController.setActivePokemon('${p.name}')" class="selectable">${p.name}</id=>`)
  document.getElementById('pokemon-listings').innerHTML = template
}

function _drawActivePokemon(){
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.PokeTemplate
}

export class WildPokeController{
  constructor(){
    this.getAllPokemon()
    ProxyState.on("pokemon", _drawPokemon)
    ProxyState.on("activePokemon", _drawActivePokemon)
  }
  async getAllPokemon() {
    await wildPokeService.getAllPokemon()
  }

  async setActivePokemon(url){
    const res = await pokeApi.get('pokemon/' + url)
    const newPokemon = new Pokemon(res.data)
    ProxyState.activePokemon = newPokemon
    console.log(newPokemon);
  }
}