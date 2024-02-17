import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import PostDetail from '../PostDetail'; // Adjust this import path to your actual file structure

jest.mock('../postsSlice', () => ({
    ...jest.requireActual('../postsSlice'),
    fetchPostById: jest.fn().mockReturnValue({ type: 'posts/fetchPostById/mockAction' }),
}));

jest.mock('../../comments/commentsSlice', () => ({
    ...jest.requireActual('../../comments/commentsSlice'),
    fetchCommentsForPost: jest.fn().mockReturnValue({ type: 'comments/fetchCommentsForPost/mockAction' }),
}));

const mockStore = configureStore();

const initialState = {
    posts: {
        entities: [{
            userId: 1,
            id: 1,
            title: "Test Post Title",
            body: "This is the content of the test post."
        }],
    },
    comments: {
        commentsByPostId: {
            '1': [
                { id: 101, text: 'Example comment 1 for post 1' },
                { id: 102, text: 'Example comment 2 for post 1' },
            ]
        }
    }
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        postId: '1',
    }),
}));

describe('PostDetail Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    test('renders post title and content', () => {
        render(
            <Provider store={store}>
                <Router>
                    <PostDetail />
                </Router>
            </Provider>
        );

        expect(screen.getByText(initialState.posts.entities[0].title)).toBeInTheDocument();
        expect(screen.getByText(initialState.posts.entities[0].body)).toBeInTheDocument();
        // Optionally, add assertions to check for the comments if needed
    });
});
