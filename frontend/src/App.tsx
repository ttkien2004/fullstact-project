import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import "primeicons/primeicons.css";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import { todoType } from "./types/todoType";
import todoApi from "./services/todoService";

function App() {
  const [todos, setTodos] = useState<todoType[]>([]);

  const [selectedTodo, setSelectedTodo] = useState<todoType[]>([]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
    todoApi
      .getAllTodos()
      .then((res) => {
        console.log(res.data);
        setTodos(res?.data ?? []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onTodoChange = (e: CheckboxChangeEvent) => {
    let selectedTodos = [...selectedTodo];
    if (e.checked) {
      selectedTodos.push(e.value);
    } else {
      selectedTodos.splice(selectedTodos.indexOf(e.value), 1);
    }
    setSelectedTodo(selectedTodos);
  };

  return (
    <div className="tasklists">
      <div className="header">
        <i className="pi pi-server" style={{ marginRight: "10px" }}></i>Task
        Lists
      </div>
      <div className="to-do-list">
        {todos.map((todo, index) => (
          <div key={index} className="list-item">
            <div
              className="head-warning"
              style={{
                border: `2px solid ${todo.status?.color}`,
                position: "absolute",
                left: "5px",
                width: "2px",
                height: "30px",
                borderRadius: "10px",
              }}
            ></div>
            <Checkbox
              // onChange={(e) => setChecked(e.checked ? true : false)}
              // checked={toDos.includes(todo)}
              inputId={index.toString()}
              value={todo}
              onChange={onTodoChange}
              checked={selectedTodo.includes({
                title: todo.title,
                author: todo.author,
              })}
            ></Checkbox>
            <div className="title-name-container">
              <div>{todo.title}</div>
              <div style={{ fontSize: "10px", fontStyle: "italic" }}>
                By {todo.author}
              </div>
            </div>

            <div className="btn-container">
              <Button
                severity="success"
                icon="pi pi-check"
                rounded
                outlined
                text
              />
              <Button
                severity="danger"
                icon="pi pi-trash"
                rounded
                outlined
                text
              />
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <span className="cancel-button">Cancel</span>
        <button className="add-button">Add Task</button>
      </div>
    </div>
  );
}

export default App;
