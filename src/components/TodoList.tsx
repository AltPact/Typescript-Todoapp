import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "TODOS"

export function TodoList(){
    console.log("Render TodoList")

    const [todos, setTodos] = useState(() => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (value == null) return []
        return JSON.parse(value)
    })
    const [newTodoName, setNewTodoName] = useState("")

    function addTodo(e: { preventDefault: () => void }) {
        e.preventDefault()

        setTodos((prevTodos: any) => {
            return [
                ...prevTodos,
                {id: crypto.randomUUID(), name:newTodoName, completed: false}
            ]
        })

        setNewTodoName("")
    }

    function toggleTodo(id: any, completed: any){
        setTodos((prevTodos: any[]) => {
            return prevTodos.map((todo: { id: any }) => {
                if (todo.id === id) {
                    return {...todo,completed}
                }
            })
        })
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <form onSubmit={addTodo} className="form">
                <label>New Task</label>
                <input
                    value={newTodoName}
                    onChange={e => setNewTodoName(e.target.value)}
                    type="text"
                />
                <button>Add</button>
            </form>
            <ul>
                {todos.map((todo: { id: Key | null | undefined; completed: boolean | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e: { target: { checked: any } }) => toggleTodo(todo.id, e.target.checked)}
                            />
                            {todo.name}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    )
}