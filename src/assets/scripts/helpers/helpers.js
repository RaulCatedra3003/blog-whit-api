import { Post } from '../views/components/Post';

export const createFragmentList = data => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(Post(element));
  });
  return fragment;
};
