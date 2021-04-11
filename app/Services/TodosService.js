import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "../Services/AxiosService.js"

class TodosService {
    async getTodos() {
        let res = await sandboxApi.get('todos')

        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async addTodo(newTodo) {
        let res = await sandboxApi.post('todos', newTodo)
        // res.data.id = res.data._id
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]

    }

    async deleteTodo(id) {
        await sandboxApi.delete('todos/' + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    async completed(id) {

        let todo = ProxyState.todos.find(todo => id == todo.id)
        if (todo.completed == true) {
            todo.completed = false
        } else if (todo.completed == false) {
            todo.completed = true
        }
        await sandboxApi.put('todos/' + id, todo)
        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService();