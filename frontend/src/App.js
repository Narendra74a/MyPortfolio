import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { getUser, loadUser } from "./actions/user";
import AdminPanel from './Components/Admin/AdminPanel'
import TimeLine from './Components/Admin/Timeline'
import YoutubeCard from './Components/Admin/Youtube'
import Project from './Components/Admin/Project'

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? <div>Loading</div> : (<div className="custom-cursor-image">
        <Header />
        <Routes>
          <Route path="/" element={<Home youtubes={user.youtube}
            timelines={user.timeline}
            skills={user.skills} />} />
          <Route path="/about" element={<About about={user.about} />} />
          <Route path="/projects" element={<Projects projects={user.projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/Account"
            element={isAuthenticated ? <AdminPanel /> : <Login />} />
          <Route
            path="/admin/timeline"
            element={isAuthenticated ? <TimeLine /> : <Login />} />
          <Route
            path="/admin/youtube"
            element={isAuthenticated ? <YoutubeCard /> : <Login />} />
          <Route
            path="/admin/project"
            element={isAuthenticated ? <Project /> : <Login />} />
        </Routes>
        <Footer />
      </div>
      )}
    </Router>
  )
}

export default App
