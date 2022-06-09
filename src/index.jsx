import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProviderContext } from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderContext>
    <App />
  </AuthProviderContext>
);
