// PostDetail.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostById } from './postsSlice'; // Ensure this import path is correct
import { fetchCommentsForPost } from '../comments/commentsSlice'; // Corrected import
import CommentsList from '../comments/CommentsList'; // Ensure this import path is correct

const PostDetail = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const numericPostId = parseInt(postId, 10); // Ensuring postId is a number

    // Accessing state.posts.entities using useSelector
    const posts = useSelector((state) => state.posts.entities);

    useEffect(() => {
        // Checking if posts and postId are available
        if (posts && postId)
        {
            const postExists = posts.some(post => post.id === numericPostId);
            if (!postExists)
            {
                dispatch(fetchPostById(numericPostId));
                dispatch(fetchCommentsForPost(numericPostId));
            }
        }
    }, [posts, postId, numericPostId, dispatch]);
    
    const post = useSelector((state) =>
        state.posts.entities.find(post => post.id === numericPostId)
    );

    // Assuming CommentsList component will handle rendering comments itself
    if (!post) return <p>Loading post...</p>;

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>#{post.id}</p>
            <CommentsList postId={postId} /> {/* Pass postId as a prop */}
        </article>
    );
};

export default PostDetail;
