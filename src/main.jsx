import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import "./i18n";
import App from './App'
import { AuthProvider } from "./context/AuthContext";
import store from "./components/redux/store";
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
 <AuthProvider>
      <App />
 </AuthProvider>
 </Provider>,
  </StrictMode>,
)
