/* 기본 import */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
/* 라이브러리 import */
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

/* 돔 구조 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
