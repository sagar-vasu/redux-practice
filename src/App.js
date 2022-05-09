import React from "react";
import MainFile from "./redux/store";
import { Provider } from "react-redux";
import Login from "./screens/login";

function App() {
  return (
    <Provider store={MainFile}>
      <Login />
    </Provider>
  );
}

export default App;
