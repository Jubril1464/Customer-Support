import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { NotifierProvider } from "react-pop-notifier";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotifierProvider>
      <App />
    </NotifierProvider>
  </StrictMode>
);
