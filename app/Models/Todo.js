import { ProxyState } from "../AppState.js";


export default class Todo {
    constructor({ description, user, _id, completed = false }) {
        this.description = description
        this.id = _id
        this.user = user
        this.checked = completed
    }

    get Template() {

        return `
    <li class="list-group-item"><input class="mr-2" type="checkbox" aria-label="Todo Checkbox" id="box" onclick="app.todosController.completed(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> ${this.name} <i class="fas fa-times ml-2 text-danger" title='delete' onclick="app.todosController.deleteTodo('${this.id}')"></i></li> `
    }


}

{/* <div class="col-md-4 mb-3">
    <div class="list-card shadow bg-white text-center rounded">
        <div class="text-center p-2">
            <div class="d-flex flex-column text-center">
                <div class="d-flex flex-column justify-content-start text-center">
                    <span class="d-flex justify-content-start text-center"><h3>Todo!</h3></span>
                    <div class="text-light">${this.CompletedTasks}/${this.Total} remaining!</div>
                </div>
            </div>
        </div>
        <div class="p-3">
            <ul>

            </ul>
        </div>
        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
            <input type="text" name="name" id="name" class="form-control" placeholder="Task" aria-describedby="helpId"
                required minlength="3" maxlength="50">
                <button type="submit" class="btn btn-success ml-2" title='add task'><i class="fas fa-plus"></i></button>
        </form>
    </div>
    </div> */}