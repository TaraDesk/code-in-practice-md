<script>
  import {
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  } from "./utils/drags.js";
  import {
    getFilteredTodos,
    addTodo,
    clearCompletedTask,
    deleteTask,
    toggleTaskStatus,
  } from "./utils/todos.js";

  import Button from "./components/Button.svelte";

  let todos = $state([
    {
      id: '1', 
      title: 'Complete online Javascript courses', 
      isDone: true
    },
    {
      id: '2', 
      title: 'Jog around the park 3x', 
      isDone: false
    },
    {
      id: '3', 
      title: '10 minutes meditation', 
      isDone: false
    },
    {
      id: '4', 
      title: 'Read for 1 hour', 
      isDone: false
    },
    {
      id: '5', 
      title: 'Pick up groceries', 
      isDone: false
    },
    {
      id: '6', 
      title: 'Complete Todo App on Frontend Master', 
      isDone: false
    },
  ]);
  let category = $state("All");
  let draggedItemIndex = $state();

  function setTodos(newTodos) {
    todos = newTodos;
  }

  function setCategory(newCategory) {
    category = newCategory;
  }

  function setDraggedItemIndex(index) {
    draggedItemIndex = index;
  }
</script>

<div class="todo">
  <!-- Input List -->
  <div class="todo__input shadow">
    <div class="custom-marker"></div>
    <input type="text" placeholder="Create a new todo..."
      onkeydown={(event) =>
        addTodo(event, todos, setTodos, category, setCategory)}
    />
  </div>

  <div class="todo__container shadow">
    <!-- List -->
    <ul class="todo__list">
      {#if getFilteredTodos(todos, category).length == 0}
        <li class="todo__list-empty">
          Create your new task
        </li>
      {:else}
        {#each getFilteredTodos(todos, category) as todo, i (todo.id)}
          <li class="todo__list-items" draggable="true"
            ondrag={handleDrag}
            ondragstart={(event) =>
              handleDragStart(event, i, setDraggedItemIndex)}
            ondragend={(event) => handleDragEnd(event, setDraggedItemIndex)}
            ondragover={handleDragOver}
            ondrop={(event) =>
              handleDrop(event, i, draggedItemIndex, todos, setTodos, () =>
                getFilteredTodos(todos, category),
              )}
          > 
            <div class="todo__list-check">
              <input type="checkbox" id="checkTodo-{todo.id}" class="checkbox-input hide" 
                checked={todo.isDone}
                onchange={(event) => toggleTaskStatus(event, todo.id, todos, setTodos)}
              />
              <div class="custom-marker"></div>
            </div>

            <label for="checkTodo-{todo.id}" class="{ todo.isDone ? 'strikethrough' : ''}">{todo.title}</label>

            <button class="button button-icon" onclick={() => deleteTask(todo.id, todos, setTodos)}>
              <img src="./icon-cross.svg" alt="Cross icon" />
            </button>
          </li>
        {/each}
      {/if}
    </ul>

    <!-- Todo Menu -->
    <div class="todo__menu ">
      <p> {getFilteredTodos(todos, category).filter((item) => !item.isDone).length} items left</p>
      <div class="todo__category-desktop">
        <Button className="menu-button { category == "All" ? 'active' : ''}" click={() => setCategory("All")}>
          All
        </Button>
        <Button className="menu-button { category == "Active" ? 'active' : ''}" click={() => setCategory("Active")}>
          Active
        </Button>
        <Button className="menu-button { category == "Completed" ? 'active' : ''}" click={() => setCategory("Completed")}>
          Completed
        </Button>
      </div>
      <Button className="menu-button" click={() => clearCompletedTask(todos, setTodos)}>
        Clear Completed
      </Button>
    </div>
  </div>

  <!-- Todo Mobile Menu -->
  <div class="todo__category-mobile shadow">
    <Button className="mobile-menu-button { category == "All" ? 'active' : ''}" click={() => setCategory("All")}>
      All
    </Button>
    <Button className="mobile-menu-button { category == "Active" ? 'active' : ''}" click={() => setCategory("Active")}>
      Active
    </Button>
    <Button className="mobile-menu-button { category == "Completed" ? 'active' : ''}" click={() => setCategory("Completed")}>
      Completed
    </Button>
  </div>
</div>



<style lang="scss">
  @import '../styles';

  .todo {
    @include flex($direction: column);
    gap: 1rem;

    @media (min-width: 47.25rem) {
      gap: 1.375rem;
    }
  }

  // Input Section
  .todo__input {
    @include flex($align: center);

    position: relative;

    .custom-marker {
      @include rounded-marker;
      background-color: var(--bg-list-color);
      border: 0.063rem solid var(--border-check-mark);
      left: 1.25rem;

      @media (min-width: 47.25rem) {
        left: 1.5rem;
      }
    }


    input {
      @include border-radius('all');
      font-family: Josefin Sans, sans-serif;
      font-size: 0.75rem;
      width: 100%;
      border: none;
      padding: 1rem 1.25rem 0.938rem 3.25rem;
      color: var(--text-color);
      background-color: var(--bg-list-color);

      &::placeholder {
        color: var(--text-secondary-color);
      }

      @media (min-width: 47.25rem) {
        font-size: 1.25rem;
        padding: 1.25rem 1.5rem 1.063rem 4.25rem;
      }
    }
  }

  .todo__container {
    @include border-radius('bottom');
  }
  // Todo Section
  .todo__list {

    @media (min-width: 47.25rem) {
      font-size: 1.125rem;
    }

    :hover .button-icon {
      @include flex($align: center);
    }

    &-check {
      @include flex($align: center);
      position: relative;

      .custom-marker {
        @include rounded-marker;
        background-color: var(--bg-list-color);
        border: 0.063rem solid var(--border-check-mark);
        transition: all ease-in-out 300ms;
      }

      input {
        z-index: 1;
        cursor: pointer;
      }

      input:hover + .custom-marker {
        border: 0.063rem solid var(--bright-blue);
      }

      input:checked + .custom-marker {
        border: none;
        background: 
          linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        background-size: cover;
        background-position: center;
      }

      input:checked + .custom-marker::after {
        content: "";
        position: absolute;
        background-image: url('/icon-check.svg');
        height: 0.5rem;
        width: 0.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-51%, -50%);
      }

    }

    li {
      background-color: var(--bg-list-color);
      border-bottom: 0.125rem solid var(--bg-color);
    }

    &-empty {
      @include p-all;
      @include border-radius('top');
      @include flex(column, center, center)
    }

    &-items {
      @include p-all;
      @include flex($align: center);
      gap: 0.75rem;

      &:first-child {
        @include border-radius('top');
      }

      label {
        cursor: pointer;
      }

      @media (min-width: 47.25rem) {
        gap: 1.5rem;
      }
    }

    .button-icon {
      @include flex($align: center);
      margin-left: auto;

      img {
        max-width: 0.75rem;
        max-height: 0.75rem;
      }

      @media (min-width: 768px) {
        display: none;

        img {
          max-width: 1.125rem;
          max-height: 1.125rem;
        }
      }
    }
  }

  .todo__menu {
    @include p-all;
    @include border-radius('bottom');
    @include flex($justify: space-between, $align: center);

    color: var(--text-secondary-color);
    background-color: var(--bg-list-color);
  }

  .todo__category-desktop {
    display: none;

    @media (min-width: 47.25rem) {
      @include flex($justify: center, $align: center);
      gap: 1rem;
    }
  }

  .todo__category-mobile {
    @include p-all;
    @include border-radius('all');
    @include flex($justify: center, $align: center);

    background-color: var(--bg-list-color);
    gap: 1rem;

    @media (min-width: 47.25rem) {
      display: none;
    }
  }
  
</style>
