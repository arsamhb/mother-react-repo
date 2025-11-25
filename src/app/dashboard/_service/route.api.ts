const JSON_PLACEHOLDER_ROUTE = 'https://jsonplaceholder.typicode.com';

const JSON_PLACEHOLDER_POSTS_ROUTE = `${JSON_PLACEHOLDER_ROUTE}/posts`;
const getJsonPlaceHolderPostCommentsRouteByPostId = (postId: string) =>
  `${JSON_PLACEHOLDER_POSTS_ROUTE}/${postId}/comments`;

export { JSON_PLACEHOLDER_POSTS_ROUTE, getJsonPlaceHolderPostCommentsRouteByPostId };
