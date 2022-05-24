import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
SnacksController

class App {
  snacksController = new SnacksController()
}

window["app"] = new App();
