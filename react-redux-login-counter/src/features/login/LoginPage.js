import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

// Inside your login component



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try
    {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User is signed in
      const user = userCredential.user;
      console.log('Logged in user:', user);
      // Redirect user or show login success message
      navigate('/'); // Redirect to home page after successful login
    } catch (error)
    {
      console.error('Error signing in:', error.message);
      // Handle errors here, such as incorrect password or user not found
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
