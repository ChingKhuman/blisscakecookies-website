import React, { useEffect } from "react";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";

import Markup from "./markup/Markup";
import { useDispatch } from "react-redux";
import { checkAutoLogin } from "./services/AuthService";

function App() {
  return (
    <div className="App">
      <Markup />
    </div>
  );
}

export default App;
