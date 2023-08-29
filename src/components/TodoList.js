import { useState } from 'react';
import TodoItem from './TodoItem';
import uniqid from 'uniqid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: 'Go to the gym' }
    ]);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value
        };

        setTodos(oldTodos => [...oldTodos, todo]);
        e.target.value = '';

    }
    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <label htmlFor='todo-name'>Add Todo</label>
            <input type='text' id='todo-name' onBlur={onTodoInputBlur} name='todo'></input>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodoItemClickHandler}></TodoItem>)}
            </ul>
        </>
    );
}