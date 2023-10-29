import React from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";

import Info from "./components/Info";


const App = () => {
  return (
    <div>

    <div className="container">
    <div>
      <LoginForm />
      </div>
      <div>
        <Info/>
      </div>
      </div>
      </div>
  )
};

export default App;
