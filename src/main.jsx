import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TodoProvider } from './context/TodoContext';

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
