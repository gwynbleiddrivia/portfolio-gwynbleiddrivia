import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Main from './layout/Main'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
	{
    		path: "/",
    		element: <Home></Home> ,
	},
	{
		path: "/resume",
		element: <Resume></Resume>
	},
	{
		path: "/projects",
		element: <Projects></Projects>
	},
	{
		path: "/contact",
		element: <Contact></Contact>
	}
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<div className="">
      		<RouterProvider router={router} />
	</div>
  </React.StrictMode>,
)
