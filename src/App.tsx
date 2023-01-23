import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>

  );
}

export default App;
