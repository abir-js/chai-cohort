import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App</h1>
    </>
  );
}

const anotherElement = {
  
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <MyApp />
  </StrictMode>
);
