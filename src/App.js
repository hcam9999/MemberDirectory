import Header   from './components/Header'       
import Footer   from './components/Footer'
import Home     from './components/Home'         
import Profile  from './components/Profile'
import Missing  from './components/Missing'   
import { useState, useEffect}   from 'react'
import {Routes, Route}          from 'react-router-dom'


//import users from './users.js' //import member's data from js file
function App() {
  
  const API_URL = "https://randomuser.me/api/1.3/?results=100&inc=login,picture,name,dob,email,location,id,phone&seed=abc&nat=us,dk,fr,gb"
  const [members, setMembers]   = useState([])
  const [error, setError]       = useState(null);   //set error to null (nothing ran so no error)
  const [search, setSearch]     = useState('')      //set search phrase to empty sring


//fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error ("Data not recieved")
        const data = await response.json()
        setMembers(data.results)
        setError(null);
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  },[])
  
  return(
  <div className="App">
          <Header title="Member Directory" />
          <Routes>
            <Route path="/" element= {<Home members = {members} error = {error} search = {search} setSearch={setSearch} />} />              
            <Route path="/profile/:id" element= {<Profile members = {members}/>} />
            <Route path="*" element= {<Missing />} />
          </Routes>        
          <Footer />
  </div>
  );
}

export default App;
