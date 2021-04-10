import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import WeathersController from "./Controllers/WeathersController.js";
import ClocksController from "./Controllers/ClocksController.js";

class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  todosController = new TodosController();
  weathersController = new WeathersController();
  clocksController = new ClocksController();
}

window["app"] = new App();
