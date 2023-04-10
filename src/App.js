import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ToDoList from "./TodoList";
import "./app.css";
import Footer from "./Footer";

class App extends Component {
  state = {
    todos: [],
    newTodo: "",
  };
  componentDidMount() {
    const stodredTasks = JSON.parse(localStorage.getItem("todos"));
    if (stodredTasks) {
      this.setState({ todos: stodredTasks });
    }
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo !== "") {
      const tasks = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(tasks));
      this.setState({ todos: tasks, newTodo: "" });
    }
  };

  deleteTask = (i) => {
    const { todos } = this.state;
    const tasks = [...todos.slice(0, i), ...todos.slice(i + 1)];
    localStorage.setItem("todos", JSON.stringify(tasks));
    this.setState({ todos: tasks });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <>
        <div className="todo-app">
          <h1>Todo List</h1>
          <div className="todo-form">
            <input type="text" value={newTodo} onChange={this.handleChange} />
            <button
              onClick={this.addTodo}
              className="add bg-primary text-white btn"
            >
              Add Task
            </button>
          </div>
          <ToDoList deleteTask={this.deleteTask} todos={todos} />
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
