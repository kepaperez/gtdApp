// src/hooks/useTodos.js
import { useEffect, useState } from 'react';
import { getTodos } from '../services/api';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const todosData = await getTodos();
            setTodos(todosData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, check: !todo.check } : todo
            )
        );
    };

    return { todos, loading, error, toggleTodo };
};

export default useTodos;
