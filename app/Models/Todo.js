import { ProxyState } from "../AppState.js";


export default class Todo {
    constructor({ description, user = null, _id = null, completed = null }) {

        this.description = description
        this.user = user
        this.id = _id
        this.completed = completed
    }

    get Template() {

        return `
        <li class="list-group-item"><input class="mr-2" type="checkbox" aria-label="Todo Checkbox" id="box" onclick="app.todosController.completed('${this.id}')" ${this.completed ? 'checked' : ''}> ${this.description} <button type="button" class="btn-sm btn-danger" onclick="app.todosController.deleteTodo('${this.id}')">Delete</button></li> `
    }

}
    /* <i class="fas fa-times ml-2 text-danger" title='delete' onclick="app.todosController.deleteTodo('${this.id}')"></i> */

