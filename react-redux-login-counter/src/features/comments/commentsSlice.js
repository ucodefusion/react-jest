// commentsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsForPost = createAsyncThunk(
  'comments/fetchCommentsForPost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      return { postId, comments: data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  commentsByPostId: {},
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsForPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        state.commentsByPostId[postId] = comments;
        state.loading = false;
      })
      .addCase(fetchCommentsForPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Assuming rejectWithValue was used for error handling
      });
  },
});

export default commentsSlice.reducer;
