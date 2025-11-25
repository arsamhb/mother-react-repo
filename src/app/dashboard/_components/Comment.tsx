import React from 'react';
import { PostCommentItem } from '../_service/interface.response';

interface CommentProps {
  comment: PostCommentItem;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="border-base-300 bg-base-100 border flex flex-col gap-sm  rounded-md p-md shadow-md ">
      <h4 className="text-lg font-medium">{comment.name}</h4>
      <p className="text-sm text-base-content">{comment.email}</p>
      <p className="text-sm text-base-content">{comment.body}</p>
    </div>
  );
};

export default Comment;
