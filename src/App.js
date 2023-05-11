import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Users from './components/Users';



function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => { 
      await axios
      .get("https://randomuser.me/api?results=25")
      .then((response) => {
        const users = response.data.results
        setUser(users)
      })
    }
    getUsers()
  },[])

  console.log(user)

  return (
    <div className="App">
      <Users user={user} />
    </div>
  );
}

export default App;
