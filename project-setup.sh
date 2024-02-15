#!/bin/bash

# Step 1: Create a new React application
appName="react-redux-login-counter"
echo "Creating a new React app named $appName..."
npx create-react-app $appName

cd $appName

# Step 2: Install necessary packages
echo "Installing Redux, React-Redux, Jest, and React Testing Library..."
npm install redux @reduxjs/toolkit react-redux
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Step 3: Create folder structure and files for the login page
echo "Creating folder structure and files for the login page..."
mkdir -p src/features/login
touch src/features/login/LoginPage.js
touch src/features/login/loginSlice.js
touch src/features/login/LoginPage.test.js

# Step 4: Create folder structure and files for the counter feature
echo "Creating folder structure and files for the counter feature..."
mkdir -p src/features/counter
touch src/features/counter/Counter.js
touch src/features/counter/counterSlice.js
touch src/features/counter/Counter.test.js

# Populate LoginPage.js with a basic template
cat <<EOF > src/features/login/LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
EOF

# Populate LoginPage.test.js with a basic test
cat <<EOF > src/features/login/LoginPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

test('renders login page', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
EOF

# Populate Counter.js with a basic counter component
cat <<EOF > src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Counter;
EOF

# Populate counterSlice.js with a basic Redux slice for the counter
cat <<EOF > src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
EOF

# Populate Counter.test.js with a basic test for the counter component
cat <<EOF > src/features/counter/Counter.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders counter component', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
});
EOF

# Reminder to modify src/app/store.js to include counter reducer
echo "Don't forget to modify src/app/store.js to include the counter
