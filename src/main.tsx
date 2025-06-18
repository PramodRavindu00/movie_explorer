import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthNavigate from "./components/AuthNavigate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthNavigate>
        <App />
      </AuthNavigate>
    </BrowserRouter>
  </StrictMode>
);
