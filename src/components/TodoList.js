import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
        {props.list.map(todo => (
          <Todo key={todo.id} 
          todo={todo} 
          toggleCompleted={props.toggleCompleted} />
        ))}
        <button className="clear-btn" onClick={props.clearItem}>
          Clear Completed
        </button>
      </div>
    );
  };
  
  export default TodoList;
  




















// {/* <TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array. */}
