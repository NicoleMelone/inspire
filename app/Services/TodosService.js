import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "../Services/AxiosService.js"

class TodosService {
    addTodo(newTodo) {
        ProxyState.todos.push(newTodo.name, newTodo.checked, newTodo.id)

        ProxyState.todos = ProxyState.todos
    }

    deleteTodo(id) {
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    completed(bool, id) {
        ProxyState.todos.find(t => id == t.id).checked = bool

        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService();