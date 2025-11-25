'use client';
import React from 'react';
import { PostItem } from '../_service/interface.response';
import { useGetPosts } from '../_service/hook.query';
import Loading from '@/shared/UI/Loading';
import Post from './Post';

const PostsDashboard = () => {
  const { data: posts, isLoading: isLoadingPosts } = useGetPosts();

  return (
    <section className="flex flex-col p-md gap-md items-center justify-center md:w-1/2 w-full mx-auto">
      <h2 className="text-2xl font-bold">Posts</h2>
      {isLoadingPosts ? (
        <Loading size="sm" />
      ) : (
        posts?.map((post: PostItem) => <Post key={post.id} post={post} />)
      )}
    </section>
  );
};

export default PostsDashboard;
