import { useState } from 'react';
import TodoItem from './TodoItem';
import uniqid from 'uniqid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room', isDone: false },
        { id: 2, text: 'Wash the dishes', isDone: false },
        { id: 3, text: 'Go to the gym', isDone: false }
    ]);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        };

        setTodos(oldTodos => [...oldTodos, todo]);
        e.target.value = '';

    }
    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        console.log('Toggle ', id);
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find( x => x.id === id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
            let restTodos = oldTodos.filter(x => x.id !== id);
            return [...restTodos, toggledTodo];
        })
    };

    return (
        <>
            <label htmlFor='todo-name'>Add Todo</label>
            <input type='text' id='todo-name' onBlur={onTodoInputBlur} name='todo'></input>
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    ></TodoItem>)
                }
            </ul>
        </>
    );
}