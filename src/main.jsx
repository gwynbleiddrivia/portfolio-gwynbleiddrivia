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
import BestProjects from './pages/BestProjects'
import DetailsPro1 from './homePages/DetailsPro1'
import DetailsPro2 from './homePages/DetailsPro2'
import DetailsPro3 from './homePages/DetailsPro3'
import Foo from './shared/Foo'

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
	},
	{
		path: "/detpro1",
		element: <DetailsPro1></DetailsPro1>
	},
	{
		path: "/detpro2",
		element: <DetailsPro2></DetailsPro2>
	},
	{
		path: "/detpro3",
		element: <DetailsPro3></DetailsPro3>
	},
	{
		path: "/bestprojects",
		element: <BestProjects></BestProjects>
	},
	{
		path: "/foo",
		element: <Foo></Foo>
	},

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
