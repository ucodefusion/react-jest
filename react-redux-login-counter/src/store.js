import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

import postsReducer from './features/posts/postsSlice';
import commentsReducer from './features/comments/commentsSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        posts: postsReducer,
        comments: commentsReducer,
    },
});
