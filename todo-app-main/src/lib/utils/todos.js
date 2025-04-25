export function getFilteredTodos(todos, category) {
    if (category === 'Active') {
        return todos.filter(todo => !todo.isDone);
    }
    if (category === 'Completed') {
        return todos.filter(todo => todo.isDone);
    }
    return todos;
}

export function addTodo(event, todos, setTodos, category, setCategory) {
    if (event.key === 'Enter' && event.target.value.trim()) {
        const newTodo = { id: Date.now().toString(), title: event.target.value, isDone: false };
        setTodos([newTodo, ...todos]);
        event.target.value = '';
        
        if (category === 'Completed') setCategory('Active');
    }
}

export function clearCompletedTask(todos, setTodos) {
    setTodos(todos.filter(todo => !todo.isDone));
}

export function toggleTaskStatus(event, id, todos, setTodos) {
    const newTodos = [...todos]
    const actualTodoIndex = newTodos.findIndex(todo => todo.id === id);

    if (event.target.checked) {
        newTodos[actualTodoIndex].isDone = true;
    } else {
        newTodos[actualTodoIndex].isDone = false;
    }

    setTodos(newTodos);
}

export function deleteTask(id, todos, setTodos) {    
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
}
