import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './features/login/LoginPage'; // Adjust the path as necessary
import HomePage from './HomePage'; // Adjust the path as necessary or create this component
import PrivateRoute from './PrivateRoute'; // We will create this component for protected routes
import Counter from './features/counter/Counter'; // Adjust the import path as needed
import PostsList from './features/posts/PostsList';
import NavBar from './components/NavBar'; // Adjust the import path as needed

import PostDetail from './features/posts/PostDetail';
function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/counter" element={<PrivateRoute><Counter /></PrivateRoute>} /> 
          <Route path="/login" element={<LoginPage />} />
          // Add more routes as needed
        </Routes>
      </div>
    </Router>
  );
}

export default App;
