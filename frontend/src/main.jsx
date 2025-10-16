import { StrictMode,React } from 'react'
import {createRoot } from 'react-dom/client'

import App from './App.jsx'
// Bootstrap CSS & Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';

import { createBrowserRouter, createRoutesFromElements, Route,Routes, Router, RouterProvider } from 'react-router-dom'

//Course page related
import Courses from './components/Courses/Courses.jsx';
import Ongoing from "./components/Courses/Ongoing.jsx";
import Upcoming from "./components/Courses/Upcoming.jsx";
import CourseDetails from './components/Courses/CourseDetails.jsx';

import { Children } from 'react';
import About from './components/AboutUs/About.jsx'
import Contact from './components/ContactUs/Contact.jsx';
import FreeResources from './components/FreeResources/FreeResources.jsx';
import Placement from './components/Placement/Placement.jsx';
import ProjectPortfolio from './components/ProjectPortfolio/ProjectPortfolio.jsx';

//blog page
import Blog from './components/Blog/Blog.jsx';
import BlogLayout from './components/Blog/BlogLayout.jsx';
import BlogPost from './components/Blog/BlogPost.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='Courses' element={<Courses/>}/>
      <Route path="Courses/ongoing" element={<Ongoing />} />
      <Route path="Courses/upcoming" element={<Upcoming />} />
      <Route path="Courses/:id" element={<CourseDetails />} /> 
      <Route path='Contact' element={<Contact/>}/>
      <Route path='FreeResources' element={<FreeResources/>}/>
      <Route path='Placement' element={<Placement/>}/>
      <Route path='ProjectPortfolio' element={<ProjectPortfolio/>}/>
      <Route path='About' element={<About/>}/>


          
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
       
        {/* --- BLOG ROUTES --- */}
                {/* --- BLOG ROUTES --- */}
        <Route path="/blog" element={<BlogLayout />}>
          {/* When the URL is exactly "/blog", show the welcome message */}
          <Route index element={<Blog />} />

          {/* When the URL is "/blog/:postSlug", show the BlogPost component */}
          {/* The :postSlug is a dynamic parameter */}
          <Route path=":postSlug" element={<BlogPost />} />
        </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)