import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
    let todos = ProxyState.todos;
    let template = ''
    if (todos.length == 0) {
        template += `<div class="col text-center"><p><em>You are all caught up!</em><p></div>`
    }
    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
}

export default class TodosController {
    constructor() {
        ProxyState.on('todos', _draw)
        _draw()
    }

    addTodo() {
        window.event.preventDefault()
        let form = window.event.target
        let rawTodo = {
            name: form.name.value
        }
        todosService.addTodo(rawTodo)
        form.reset()
    }

    deleteTodo(id) {
        todosService.deleteTodo(id)
    }

    completed(bool, id) {
        todosService.completed(bool, id)
    }

}