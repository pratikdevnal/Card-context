import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1>Context Api Example</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
