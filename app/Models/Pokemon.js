

export class Pokemon {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.nickName = data.name
    this.img = data.sprites.other.dream_world.front_default || data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = data.user || 'user'
    this.seen = data.seen || false
  }
  get PokeTemplate(){
    return /*html*/ `
    <div class="bg-secondary pokeball d-flex flex-column align-items-center mt-2 p-1 pt-3" id="pokeball">
      <img src="${this.img}" alt="${this.name}-image">
      <div class="text-center w-100">
        <div class="d-flex justify-content-center">
          <h4>${this.name}</h4>
          <button type="button" class="btn btn-info ms-2" onclick="app.myPokeController.addPokemon()">Add</button>
        </div>
        <p>Nickname: ${this.nickName}</p>
        <p>Types: ${this.types[0].type.name} ${this.types[1] ? ', ' + this.types[1].type.name : ''}</p>
        <div class="d-flex justify-content-around">
          <p>Height: ${this.height}</p>
          <p>Weight: ${this.weight}</p>
        </div>
        <div class="d-flex justify-content-around">
          <p>Seen? ${this.seen}</p>
          <p>Trainer: ${this.user}</p>
        </div>
      </div>
    </div>
    `
  }
}