import { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

function App() {
  const [token, setToken] = useState(0);
  const [user, setUser] = useState("");
  console.log(token);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} user={user} />
      <Authenticate token={token} setToken={setToken} setUser={setUser} />
    </>
  )
}

export default App
