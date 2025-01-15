import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useRef(null);
  const { login, error, setError } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password);
    if (!error) {
      toast.current.show({
        severity: "success",
        summary: "login-success",
        detail: "Đăng nhập thành công",
        life: 3000,
      });
      navigate("/");
    } else {
      toast.current.show({
        severity: "error",
        summary: "login-failed",
        detail: "Đăng nhập thất bại",
        life: 3000,
      });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Toast ref={toast} />
      <form
        style={{
          width: "500px",
          height: "450px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px 3px rgba(0,0,0,0.05)",
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ marginLeft: "20px" }}>Đăng nhập</h1>
        {/* Tài khoản và mật khẩu */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {/* Tài khoản */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              height: "90px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="username" style={{ fontSize: "20px" }}>
              Tài khoản
            </label>
            <InputText
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value), setError("");
              }}
            ></InputText>
          </div>
          {/* Mật khẩu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              height: "90px",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <label htmlFor="password" style={{ fontSize: "20px" }}>
              Mật khẩu
            </label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value), setError("");
              }}
            ></InputText>
          </div>
        </div>
        {/* Nút đăng nhập */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <Button label="Đăng nhập" severity="info"></Button>
          <Link className="forgot-password-btn" to="/Signup">
            Chưa có tài khoản?
          </Link>
        </div>
        {/* Kiểm tra có lỗi hay không */}
        {error && (
          <div style={{ color: "red", marginLeft: "50px", marginTop: "20px" }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
