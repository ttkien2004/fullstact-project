import { Button } from "primereact/button";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import BlogContainer from "./pages/BlogContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<BlogContainer />} path="/"></Route>
          <Route element={<LoginForm />} path="/login"></Route>
          <Route element={<SignupForm />} path="/signup"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
