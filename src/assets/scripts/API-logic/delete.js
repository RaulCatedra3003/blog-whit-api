export const deletePostInAPI = postId => {
  var settings = {
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    method: 'DELETE',
  };
  return $.ajax(settings);
};
