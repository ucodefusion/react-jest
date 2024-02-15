import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostById } from './postsSlice'; // Ensure this import is correct
import CommentsList from '../comments/CommentsList';

const PostDetail = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) =>
        state.posts.entities.find((post) => post.id === parseInt(postId))
    );

    useEffect(() => {
        if (postId)
        {
            dispatch(fetchPostById(postId));
        }
    }, [postId, dispatch]);

    if (!post) return <p>Loading post...</p>;

    return (
        <article>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <p>#{post?.id} </p>
            <CommentsList postId={postId} />
        </article>
    );
};

export default PostDetail;
