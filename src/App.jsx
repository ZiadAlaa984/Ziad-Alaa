import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Layout from './Layout/Layout'
import Notfound from './Notfound/Notfound'
import FreshCard from './FreshCard/FreshCard'
import Recipes from './Recipes/Recipes'
import ToDoList from './ToDoList/ToDoList'
import Games from './Games/Games'
import Weather from './Weather/Weather'
import Login from './Login/Login'
import Crud from './Crud/Crud'
import Mealify from './Mealify/Mealify'

// ! ==> child 
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Skills', element: <Skills /> },
        { path: 'Projects', element: <Projects /> },
        { path: 'FreshCard', element: <FreshCard /> },
        { path: 'Recipes', element: <Recipes /> },
        { path: 'ToDoList', element: <ToDoList /> },
        { path: 'Games', element: <Games /> },
        { path: 'Login', element: <Login /> },
        { path: 'Crud', element: <Crud /> },
        { path: 'Mealify', element: <Mealify /> },
        { path: 'Weather', element: <Weather /> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
