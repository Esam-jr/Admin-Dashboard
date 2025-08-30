import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CommandPaletteProvider } from "./context/CommandPaletteContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CommandPaletteProvider>
          <App />
        </CommandPaletteProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
