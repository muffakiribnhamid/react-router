import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/Home/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'



//method1

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children: [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : '/about',
//         element : <About/>
//       },
//       {      
//         path : '/contact',
//       element : <Contact/>
//     }    
//   ]
//   }  
// ])

//method 2 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/user/:userid' element={<User/>}></Route>
      <Route path='/github' loader={githubInfoLoader} element={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
