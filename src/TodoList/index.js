import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    const { todos, deleteTask } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((task, index) => (
          <li key={index} className="task">
            {task}
            <button
              onClick={() => deleteTask(index)}
              className="bg-success text-white btn done"
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ToDoList;
