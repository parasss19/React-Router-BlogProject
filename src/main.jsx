import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'     //RouterProvider component use router prop.... and To create router we import one method "createBrowserRouter" which take array of objects as parameter

import Route from './Route.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'

import Github from './Components/Github/Github.jsx'
// import Github, {githubInfoLoader} from './Components/Github/Github.jsx'   //for using loader


//creating router
const router = createBrowserRouter([
  {
    path : '/',
    element: <Route/>,

    //Now our routes for diff pages
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"user/:userid",     //here we want to show the params from the url and showed them in our website dynamically 
        element: <User />
      },

      // 1 Using useState and useEffect
      {
        path:"github",
        element:<Github/>
      }

      // 2 Using loader which is more optimize
      // {
      //   loader: {githubInfoLoader},
      //   path:"github",
      //   element:<Github/>
      // }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Here we dont require App.jsx instead we use React Router */}
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
