import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App/App.component';
import { UploadFileComponent } from '../components/Tools/TestPlanGenerator/UploadFile/UploadFile.component';
import { ExcelViewerComponent } from '../components/Tools/TestPlanGenerator/ExcelViewer/ExcelViewer.component';
import { HistoryComponent } from '../components/Tools/TestPlanGenerator/History/History.component';
import { LoginComponent } from '../components/Auth/Login/Login.component';
import { PublicLayout } from './route.publicLayout';
import { PrivateLayout } from './route.privateLayout';
import { PrivateRoute } from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <LoginComponent />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateLayout />, 
    children: [
      {
        element: <PrivateRoute />,
        children: [
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
          {
            path: '/app',
            element: <App />,
          },
        ],
      },
    ],
  },
]);

export default router;
