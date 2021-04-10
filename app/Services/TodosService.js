import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "../Services/AxiosService.js"

class TodosService {
    async getTodos() {
        let res = await sandboxApi.get('todos')
        console.log(res.data)
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async addTodo(newTodo) {
        let res = await sandboxApi.post('todos', newTodo)
        res.data.id = res.data.id
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todo, todo]
    }

    async deleteTodo(id) {
        await sandboxApi.delete('todos' + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    async completed(bool, id) {

        ProxyState.todos.find(todo => id == todo.id).checked = bool
        await sandboxApi.put(id, { checked: todo.checked })
        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService();