import { Component } from "react";
import "./App.css";
import Button from "./Components/button";
import TodoItem from "./Components/todoitem";

class App extends Component {
  state = {
    inputValue: "",
    todoList: [],
    completedQty: 0,
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onClickInputBtn = () => {
    const { inputValue, todoList } = this.state;
    let flag = false;
    if (inputValue) {
      todoList.forEach((elem) => {
        if (elem === inputValue) {
          alert("same TODO already exist");
          flag = true;
        }
      });
      if (!flag) {
        this.setState({
          todoList: [inputValue, ...todoList],
        });
        this.setState({ inputValue: "" });
      }
    }
  };

  onClickTodoBtn = (event) => {
    const todo = event.target.parentNode.parentNode.childNodes[0].textContent;
    const newTodo = prompt("Edit the TODO", todo);
    const date = new Date();
    let flag = false;
    let { todoList } = this.state;

    if (!newTodo) return;

    todoList.forEach((elem) => {
      if (elem === newTodo) {
        alert("same TODO already exist");
        flag = true;
      }
    });

    if (!flag) {
      todoList = todoList.map((todoItem) => {
        return todoItem === todo ? newTodo : todoItem;
      });
      this.setState({ todoList: todoList });
      console.log(
        `TODO ${todo} was changed at ${date.toLocaleString("en-GB")}`
      );
      alert(`TODO ${todo} was changed at ${date.toLocaleString("en-GB")}`);
    }
  };

  onChangeCheckbox = (event) => {
    let { completedQty } = this.state;
    if (event.target.checked) {
      completedQty += 1;
      this.setState({ completedQty: completedQty });
    } else {
      completedQty -= 1;
      this.setState({ completedQty: completedQty });
    }
  };

  onClickCheckBtn = () => {
    const { completedQty } = this.state;
    console.log(`Completed TODO: ${completedQty}`);
    alert(`Completed TODO: ${completedQty}`);
  };

  render() {
    const { inputValue, todoList } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>TODO List</div>
        </header>
        <main className="App-main">
          <div>
            <input
              name="Input TODO"
              className="App-input"
              value={inputValue}
              onChange={this.onInputChange}
            />
            <Button
              name="Add TODO"
              onClick={this.onClickInputBtn}
              className="App-btn"
            />
          </div>
          <ul className="App-todo">
            {todoList.map((str) => {
              return (
                <TodoItem
                  todoName={str}
                  key={str}
                  onClick={this.onClickTodoBtn}
                  onChange={this.onChangeCheckbox}
                />
              );
            })}
          </ul>
          <Button
            name="Check TODO"
            onClick={this.onClickCheckBtn}
            className="App-btn"
          />
        </main>
      </div>
    );
  }
}

export default App;
