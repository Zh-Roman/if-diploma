import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AuthProviderContext } from "./context/UserAuthContext";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProviderContext>
      <App />
    </AuthProviderContext>
  </Provider>
);
