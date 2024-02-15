import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.entities);
    const loading = useSelector((state) => state.posts.loading);
    console.log(posts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading === 'pending') return <p>Loading posts...</p>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}   #{post?.id}  </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
