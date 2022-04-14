import { ProxyState } from "../AppState.js"

class MyPokeService {
  addPokemon() {
    let pokemon = ProxyState.activePokemon
    console.log(ProxyState.activePokemon)
    pokemon.seen = true
    pokemon.user = 'Dylan'
    ProxyState.myPokemon = [pokemon, ...ProxyState.myPokemon]
    
    return pokemon
  }

}

export const myPokeService = new MyPokeService()