import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";


class WildPokeService {
  async getAllPokemon(){
    const res = await pokeApi.get('pokemon')
    ProxyState.pokemon = res.data.results
  }
}

export const wildPokeService = new WildPokeService();