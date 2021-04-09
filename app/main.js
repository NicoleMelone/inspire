import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  todosController = new TodosController();
}

window["app"] = new App();
