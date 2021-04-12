import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _draw() {
    let todos = ProxyState.todos;
    let total = ProxyState.todos.length
    let comp = ProxyState.todos.filter(t => t.completed == false).length
    let template = ''
    template += `<div class="p-1">${comp}/${total} remaining!</div>`
    if (todos.length == 0) {
        template += `<div class="col text-center"><p><em>Boom!</em><p></div>`
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
                // id: form.id.value,
                // user: form.user.value,
                // checked: form.checked.bool
            }
            await todosService.addTodo(newTodo)
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            await todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
        }
    }

    async completed(id) {
        try {
            todosService.completed(id)
        } catch (error) {
            console.error(error)
        }
    }

}