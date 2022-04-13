import { pokeApi } from "./AxiosService";

class PokiService {
  async getAllPokemon(){
    const res = await pokeApi.get('pokemon')
    console.log("res data", res)
  }
}