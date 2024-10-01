import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { router } from '../Routes/Routes.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import store from './Redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
)
