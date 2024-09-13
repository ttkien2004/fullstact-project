import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import "primeicons/primeicons.css";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Status, todoType } from "./types/todoType";
import todoApi from "./services/todoService";
import { toast } from "react-toastify";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "react-toastify/dist/ReactToastify.css";
import { useTodoContext } from "./hooks/TodoHook";

function App() {
  // const [todos, setTodos] = useState<todoType[]>([]);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const { todos, dispatch } = useTodoContext();
  const [todoStatus, setTodoStatus] = useState<Status>({
    statusType: "OUT_DATED",
  });

  const status: Status[] = [
    {
      statusType: "DONE",
      color: "#28a745",
    },
    {
      statusType: "ON_PROGRESS",
      color: "#007bff",
    },
    {
      statusType: "OUT_DATED",
      color: "#ffc107",
    },
  ];

  const [selectedTodo, setSelectedTodo] = useState<todoType[]>([]);
  // For dialog
  const [todoDialog, setTodoDialog] = useState<boolean>(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
    todoApi
      .getAllTodos()
      .then((res) => {
        dispatch({ type: "SET_TODO", payload: res.data ?? [] });
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
  const handleDelete = async (id: string) => {
    try {
      const res = await todoApi.deleteTodo(title, author, todoStatus);

      if (res) {
        // setTodos(res.data ?? []);
        dispatch({ type: "DELETE_TODO", payload: res.data });
        toast.success("Xóa thành công");
        // console.log("Xóa thành công");
      }
    } catch (err) {
      console.log(err);
      toast.error("Xóa thất bại!");
    }
  };
  const handleCreate = async () => {
    try {
      const res = await todoApi.createTodo(title, author, todoStatus);

      if (res) {
        dispatch({
          type: "ADD_TODO",
          payload: { title, author, status: todoStatus },
        });
        toast.success("Tạo thành công");
      }
    } catch (err) {
      console.log(err);
      toast.error("Tạo thất bại");
    }
  };

  const hideDialog = () => {
    setTodoDialog(false);
  };
  const TodoDialogFooter = () => {
    return (
      <>
        <Button
          label="Thêm"
          severity="success"
          onClick={() => {
            // console.log({ title, author, status: todoStatus });
            handleCreate();
            setTodoDialog(false);
          }}
        ></Button>
        <Button
          label="Đóng"
          onClick={() => setTodoDialog(false)}
          className="p-button-text"
        ></Button>
      </>
    );
  };
  const openNew = () => {
    setTodoDialog(true);
    setTitle("");
    setAuthor("");
    setTodoStatus({
      statusType: "OUT_DATED",
    });
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
                onClick={() => handleDelete(todo._id as string)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <span className="cancel-button">Cancel</span>
        <button className="add-button" onClick={openNew}>
          Add Task
        </button>
      </div>
      <Dialog
        visible={todoDialog}
        style={{ width: "450px" }}
        header={"Thêm mới Todo"}
        modal
        className="p-fluid"
        footer={TodoDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label>Title</label>
          <InputText
            id="title"
            placeholder="Nhập title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>
        <div className="field">
          <label>Author</label>
          <InputText
            id="author"
            placeholder="Nhập author"
            value={author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
            required
          />
        </div>
        <div className="field">
          <label>Status</label>
          <Dropdown
            value={todoStatus}
            onChange={(e) => {
              setTodoStatus(e.target.value);
            }}
            options={status}
            optionLabel="statusType"
            placeholder="Chọn status"
            required
          ></Dropdown>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
