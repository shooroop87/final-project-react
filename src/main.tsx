import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/variables.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '@/services/store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
