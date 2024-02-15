import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
});

// Async thunk for fetching a single post by ID
export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.json();
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: { entities: [], loading: 'idle', currentPost: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = 'idle';
            })
            .addCase(fetchPostById.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = 'idle';
                // Optionally handle single post differently, e.g., storing in currentPost
                state.currentPost = action.payload;
                // Check if the post already exists in entities to avoid duplicates
                const index = state.entities.findIndex(post => post.id === action.payload.id);
                if (index !== -1)
                {
                    state.entities[index] = action.payload;
                } else
                {
                    state.entities.push(action.payload);
                }
            })
            .addCase(fetchPostById.rejected, (state) => {
                state.loading = 'idle';
            });
    },
});

export default postsSlice.reducer;
