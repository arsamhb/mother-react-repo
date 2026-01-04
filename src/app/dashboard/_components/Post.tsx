'use client';
import { PostCommentItem, PostItem } from '../_service/interface.response';
import React, { useState } from 'react';
import Button from '@/shared/UI/Button';
import { useGetPostComments } from '../_service/hook.query';
import Loading from '@/shared/UI/Loading';
import Comment from './Comment';
import clsx from 'clsx';

interface Props {
  post: PostItem;
}

const Post: React.FC<Props> = ({ post }) => {
  const [fetchComments, setFetchComments] = useState<boolean>(false);

  const { data: postComments, isLoading: isLoadingPostComments } = useGetPostComments({
    postId: post.id.toString(),
    options: { enabled: fetchComments },
  });

  return (
    <article
      tabIndex={post.id}
      className="border-base-300 bg-base-200 border flex flex-col gap-sm  rounded-md p-md shadow-md "
    >
      <header className="text-xl font-medium">
        <h3 className="text-lg font-medium">{post.title}</h3>
        <p className="text-sm text-base-content">{post.body}</p>
        <p className="text-sm text-base-content">Published by: {post.userId}</p>
      </header>
      <div className="flex flex-col gap-sm">
        {isLoadingPostComments ? (
          <Loading size="sm" />
        ) : (
          Boolean(postComments) &&
          postComments?.map((comment: PostCommentItem) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>
      <Button
        className={clsx('w-full', { hidden: Boolean(postComments) })}
        onClick={() => setFetchComments(!fetchComments)}
      >
        View Comments
      </Button>
    </article>
  );
};

export default Post;
