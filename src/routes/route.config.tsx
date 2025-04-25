import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App.component";
import Layout from "./route.layout";
import { UploadFileComponent } from "../components/Tools/TestPlanGenerator/UploadFile/UploadFile.component";
import { ExcelViewerComponent } from "../components/Tools/TestPlanGenerator/ExcelViewer/ExcelViewer.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: '/tools/testplangenerator/uploadfile',
        element: <UploadFileComponent />,
      },
      {
        path: '/tools/testplangenerator/result',
        element: <ExcelViewerComponent />,
      },
    ],
  },
]);

export default router;
