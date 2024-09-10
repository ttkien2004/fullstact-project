import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import "primeicons/primeicons.css";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
function App() {
  let emptyTodo: todoType = {
    title: "",
    author: "",
  };
  const toDos: todoType[] = [
    {
      title: "Call Sam For payments",
      author: "Bob",
    },
    {
      title: "Make payment to Bluedart",
      author: "Johnny",
    },
    {
      title: "Office rent",
      author: "Samino",
    },
    {
      title: "Office grocery",
      author: "Tida",
    },
    {
      title: "Ask for Lunch to Clients",
      author: "Office Admin",
    },
    {
      title: "Client Meeting at 11 AM",
      author: "CEO",
    },
    {
      title: "Client Meeting at 11 AM",
      author: "CEO",
    },
    {
      title: "Client Meeting at 11 AM",
      author: "CEO",
    },
  ];
  const [selectedTodo, setSelectedTodo] = useState<todoType[]>([]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  });

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
        {toDos.map((todo, index) => (
          <div key={index} className="list-item">
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
            <div>{todo.title}</div>
            <div style={{ marginLeft: "10px" }}>By {todo.author}</div>
            <div className="btn-container">
              {/* <Button severity="success" className="pi pi-check"></Button> */}
              {/* <Button severity="danger" className="pi pi-trash"></Button> */}
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
