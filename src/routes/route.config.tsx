import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App/App.component';
import Layout from './route.layout';
import { UploadFileComponent } from '../components/Tools/TestPlanGenerator/UploadFile/UploadFile.component';
import { ExcelViewerComponent } from '../components/Tools/TestPlanGenerator/ExcelViewer/ExcelViewer.component';
import { HistoryComponent } from '../components/Tools/TestPlanGenerator/History/History.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
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
      {
        path: '/tools/testplangenerator/history',
        element: <HistoryComponent />,
      },
    ],
  },
]);

export default router;
