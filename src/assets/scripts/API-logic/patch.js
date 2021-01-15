export const patchPost = (postId, title, body) => {
  var settings = {
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    method: 'PATCH',
    data: JSON.stringify({ title: `${title}`, body: `${body}` }),
  };
  return $.ajax(settings);
};
