export function handleDragStart(event, index, setDraggedItemIndex) {
    setDraggedItemIndex(index);
    event.target.style.opacity = 0.5;
    event.target.style.backgroundColor = '#f0f0f0';
}

export function handleDrag(event) {
    event.target.style.transform = 'scale(1.05)';
    event.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
}

export function handleDragEnd(event, setDraggedItemIndex) {
    setDraggedItemIndex(null);
    event.target.style.opacity = 1;
    event.target.style.backgroundColor = '';
    event.target.style.transform = '';
    event.target.style.boxShadow = '';
}

export function handleDragOver(event) {
    event.preventDefault();
}

export function handleDrop(event, targetIndex, draggedItemIndex, todos, setTodos, getFilteredTodos) {
    if (draggedItemIndex === targetIndex) return;

    let filtered = getFilteredTodos();
    let draggedItem = filtered[draggedItemIndex];
    let newTodos = todos.filter(todo => todo !== draggedItem);

    // Get the actual target index
    let targetTodo = filtered[targetIndex];
    let actualTargetIndex = todos.indexOf(targetTodo);

    newTodos.splice(actualTargetIndex, 0, draggedItem);
    setTodos(newTodos);
}
