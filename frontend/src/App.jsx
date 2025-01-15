import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import BlogContainer from "./pages/BlogContainer";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            element={user ? <BlogContainer /> : <Navigate to={"/login"} />}
            path="/"
          ></Route>
          <Route
            element={!user ? <LoginForm /> : <Navigate to="/" />}
            path="/login"
          ></Route>
          <Route
            element={!user ? <SignupForm /> : <Navigate to="/" />}
            path="/signup"
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
