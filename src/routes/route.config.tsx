import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App.component";
import Layout from "./route.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
