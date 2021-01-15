export const getPostList = (start, limit) => {
  const settings = {
    url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    method: 'GET',
  };
  return $.ajax(settings);
};

export const getPost = id => {
  const settings = {
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'GET',
  };

  return $.ajax(settings);
};

export const getUser = userId => {
  const settings = {
    url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    method: 'GET',
  };

  return $.ajax(settings);
};
