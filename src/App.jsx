import { useState } from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUP.Jsx'
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/Protected/ProtectedRoute';


function App() {
  const [users, setUsers] = useState([])
  const [loginState, setLoginState] = useState(false);

  function addUser(user) {
    // console.log(user);
    setUsers(prevUsers => {
      return [...prevUsers, user];
    });
    console.log(users);
  }


  return (
    <>
    <Router>
       <Header loginState={loginState} setLoginState={setLoginState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Login' element={<Login users={users} loginState={loginState} setLoginState={setLoginState} />}/>
        <Route path='/signup' element={<SignUp onSignup={addUser} />}/>
        <Route element={<ProtectedRoute loginState={loginState} />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
        
        
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
