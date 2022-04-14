import { MyPokeController } from "./Controllers/MyPokeController.js";
import { WildPokeController } from "./Controllers/WildPokeController.js";


class App {
  wildPokeController = new WildPokeController();
  myPokeController = new MyPokeController();
}

window["app"] = new App();

