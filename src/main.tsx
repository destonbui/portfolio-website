import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <AnimatePresence mode="wait">
            <Home key="Home" />
          </AnimatePresence>
        ),
      },
      {
        path: "/skills",
        element: (
          <AnimatePresence mode="wait">
            <Skills key="Skills" />
          </AnimatePresence>
        ),
      },
      {
        path: "/projects",
        element: (
          <AnimatePresence mode="wait">
            <Projects key="Projects" />
          </AnimatePresence>
        ),
      },
      {
        path: "/contact",
        element: (
          <AnimatePresence mode="wait">
            <Contact key="Contact" />
          </AnimatePresence>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
