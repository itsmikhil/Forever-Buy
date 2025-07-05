import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AdminDataContextProvider } from "./context/AdminDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminDataContextProvider>
  </StrictMode>
);
