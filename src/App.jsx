import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TopCourses from './pages/TopCourses'
import Tutors from './pages/Tutors'
import Contact from './pages/Contact'
import PrivateRoute from './pages/PrivateRoute'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Spinner from './components/Spinner'
import { filterData,apiUrl } from './CoursesData'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [courses,setCourses] = useState(null);
  const [loader,setLoader] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  async function fetchData() {
    setLoader(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      console.log("An error occured");
    }

    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='app'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/edtechinstitute' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/topcourses' element={loader ? <Spinner/> : <TopCourses filterData={filterData} courses={courses} category={category} setCategory={setCategory}/>}/>
        <Route path='/tutors' element={<Tutors/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loginpage' element={<LogInPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signuppage' element={<SignUpPage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
