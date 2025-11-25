import api from '@/lib/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { ReadPostCommentsResponse, ReadPostResponse } from './interface.response';
import {
  getJsonPlaceHolderPostCommentsRouteByPostId,
  JSON_PLACEHOLDER_POSTS_ROUTE,
} from './route.api';

const useGetPosts = (options?: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['get-posts'],
    queryFn: api.get<ReadPostResponse>(JSON_PLACEHOLDER_POSTS_ROUTE),
    enabled: options ? options.enabled : true,
  });
};

const useGetPostComments = (postId: string, options?: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['get-post-comments', postId],
    queryFn: api.get<ReadPostCommentsResponse>(getJsonPlaceHolderPostCommentsRouteByPostId(postId)),
    enabled: !!postId && options ? options.enabled : true,
  });
};

export { useGetPosts, useGetPostComments };
