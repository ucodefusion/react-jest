// Assuming the file path is src/tests/PostDetail.test.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react'; // Ensure render is imported
import configureStore from 'redux-mock-store'; // Correctly imported from 'redux-mock-store'
import PostDetail from '../PostDetail'; // Adjust this import based on your file structure
// Mock the slices that export your thunks
jest.mock('../postsSlice', () => ({
  ...jest.requireActual('../postsSlice'),
  fetchPostById: jest.fn().mockReturnValue({ type: 'posts/fetchPostById' }),
}));
jest.mock('../../comments/commentsSlice', () => ({
  ...jest.requireActual('../../comments/commentsSlice'),
  fetchCommentsForPost: jest.fn().mockReturnValue({ type: 'comments/fetchCommentsForPost' }),
}));

// Setup for react-router-dom's useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    postId: '1',
  }),
}));
// Optionally, mock the useParams hook if your component uses it
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    postId: '1',
  }),
}));

// Initialize redux-mock-store without passing any middleware
const mockStore = configureStore();
// Example post data to test with
 
// Example initial state with comments

/* "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"*/
 
const examplePost = {
  userId: 1,
  id: 1,
  title: "Test Post Title",
  body: "This is the content of the test post."
  // Note: Removed the duplicate 'content' field as 'body' seems to be the correct one based on the JSON array.
};

// Adjusting the initialState to include the examplePost under a 'posts' feature state
const initialState = {
  posts: {
    entities: [examplePost], // Assuming 'entities' is the array storing posts
    // Add other necessary properties of the posts state here, if any
  },
  // Include other parts of the state as needed, such as comments
  comments: {
    commentsByPostId: {
      '1': [ // Assuming this array would contain comments for the post with id: 1
        // Example comments structure
        { id: 101, text: 'Example comment 1 for post 1' },
        { id: 102, text: 'Example comment 2 for post 1' },
      ]
    }
  }
};

describe('Post Component', () => {
  test('renders post title and content', () => {
    // Create a mock store with the initial state
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <PostDetail />
        </Router>
      </Provider>
    );

    // Assertions to verify if the post details are rendered
   expect(screen.getByText(examplePost.title)).toBeInTheDocument();
     expect(screen.getByText(examplePost.body)).toBeInTheDocument();
    // Add more assertions as necessary
  });
});
