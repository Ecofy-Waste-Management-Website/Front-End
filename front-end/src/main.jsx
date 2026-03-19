
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/react";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

