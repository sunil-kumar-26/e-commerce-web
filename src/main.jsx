import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Content from './Content.jsx'
const myrouter=createBrowserRouter([
{
  path:'/',
  element:<App/>  
},{
path:'/content',
element:<Content/>
}
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={myrouter}>
        <App />
    </RouterProvider>

)
