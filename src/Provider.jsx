import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Importa tu store desde donde lo tengas definido
import { BrowserRouter } from "react-router-dom";
import Main from "./main"; // Suponiendo que Main es tu componente principal

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
