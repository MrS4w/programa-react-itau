import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import GlobalStyle from "./GlobalStyle";
import AppProvider from "./context/AppContext";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
