export const getPostList = (start, limit) => {
  const settings = {
    url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    method: 'GET',
  };
  return $.ajax(settings);
};
