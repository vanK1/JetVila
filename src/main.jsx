import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from '../Home.jsx' // Updated import path to match the new location
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Posts from './Posts.jsx'
import Home from './Homefolder/Home.jsx'
import Comments from './Comments.jsx'
import Users from './Users.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
