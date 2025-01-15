import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, setError } = useSignup();
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(username, password);
    if (!error) {
      console.log("Signup successfully");
      navigate("/");
    } else {
      toast.current.show({
        severity: "error",
        summary: "signup-failed",
        detail: "Đăng ký thất bại",
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
        <h1 style={{ marginLeft: "20px" }}>Đăng ký</h1>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <Button label="Đăng ký" severity="info"></Button>
          <Link className="forgot-password-btn" to={"/Login"}>
            Bạn đã có tài khoản?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
