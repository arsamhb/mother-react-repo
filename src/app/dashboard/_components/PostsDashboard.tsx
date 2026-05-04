'use client';
import { useState } from 'react';
import { PostItem } from '../_service/interface.response';
import { useGetPosts } from '../_service/hook.query';
import Loading from '@/shared/UI/Loading';
import Post from './Post';
import RangeSlider from '@/shared/UI/RangeSlider';
const PostsDashboard = () => {
  const { data: posts, isLoading: isLoadingPosts } = useGetPosts();
  const [currentPrice, setCurrentPrice] = useState([0, 100000]);
  return (
    <section className="flex flex-col p-md gap-md items-center justify-center md:w-1/2 w-full mx-auto">
      <RangeSlider
        min={0}
        max={100000}
        step={1000}
        minValue={currentPrice[0]}
        maxValue={currentPrice[1]}
        onMinChange={(val) => setCurrentPrice([val, currentPrice[1]])}
        onMaxChange={(val) => setCurrentPrice([currentPrice[0], val])}
      />
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
