import { getPost, getPostList, getUser } from '../API-logic/get';
import { createFragmentList } from '../helpers/helpers';
import { PostModal } from '../views/components/PostModal';
import { renderView } from '../views/renderView';

export const initApp = () => {
  getPostList(0, 15).done(postList => {
    renderView(createFragmentList(postList));
  });
};

export const openModal = e => {
  e.preventDefault();
  getPost(e.target.id).done(({ userId, title, body }) => {
    getUser(userId).done(({ username, email }) => {
      const content = {
        username: username,
        title: title,
        body: body,
        email: email,
      };
      renderView(createModalFragment(content));
    });
  });
};

const createModalFragment = content => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append($('#root').html());
  $(fragment).append(PostModal(content));
  return fragment;
};
