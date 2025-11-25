interface PostItem {
  id: number;
  title: string;
  body: string;
  userId: number;
}

type ReadPostResponse = Array<PostItem>;

interface PostCommentItem {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type ReadPostCommentsResponse = Array<PostCommentItem>;

export type { PostItem, ReadPostResponse, ReadPostCommentsResponse, PostCommentItem };
