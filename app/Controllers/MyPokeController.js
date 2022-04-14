import { ProxyState } from "../AppState.js";
import { myPokeService } from "../Services/MyPokeService.js";
import { Pop } from "../Utils/Pop.js";

export class MyPokeController {
  constructor(){
    // ProxyState.on("myPokemon", )

  }
  addPokemon(){
    try {
      console.log('hi from myPokeController')
      myPokeService.addPokemon()
      // let pokElem = document.getElementById('pokeball')
      // pokElem.style = 'background-color: $8fdb99;'
    } catch (error) {
      console.error(error.message)
      Pop.toast(error, 'error')
    }
  }
}