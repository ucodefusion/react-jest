import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentsForPost } from './commentsSlice';

const CommentsList = ({ postId }) => {
    const dispatch = useDispatch();
    // Assuming comments are stored by postId in your Redux store
    const comments = useSelector((state) => state.comments.commentsByPostId[postId]);

    useEffect(() => {
        if (postId)
        {
            dispatch(fetchCommentsForPost(postId));
        }
    }, [postId, dispatch]);

    // Check if comments are undefined before trying to access them
    if (!comments) return <p>Loading comments...</p>;

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>
    );
};
export default CommentsList;
