import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Content from './Content.jsx'
import { Card } from './components/Card.jsx';
const myrouter=createBrowserRouter([
{
  path:'/',
  element:<App/>  
},{
path:'/content',
element:<Content/>
},
{
  path:'/content/:id',
  element:<Card/>
}
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={myrouter}>
        <App />
    </RouterProvider>

)
