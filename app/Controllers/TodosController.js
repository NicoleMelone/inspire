import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
    let todos = ProxyState.todos;
    let template = ''
    if (todos.length == 0) {
        template += `<div class="col text-center"><p><em>You are all caught up!</em><p></div>`
    }
    todos.forEach(todo => template += todo.Template)
    document.getElementById('todos').innerHTML = template
}

export default class TodosController {
    constructor() {
        ProxyState.on('todos', _draw)
        _draw()
        this.getTodos()
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }

    async addTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let newTodo = {
                description: form.description.value,
                id: form.id.value,
                user: form.user.value,
                checked: form.checked.bool
            }
            await todosService.addTodo(newTodo)
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async completed(bool, id) {
        try {
            todosService.completed(bool, id)
        } catch (error) {
            console.error(error)
        }
    }

}