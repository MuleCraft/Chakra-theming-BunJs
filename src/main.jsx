import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme";

const theme = extendTheme(customTheme);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    {" "}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
