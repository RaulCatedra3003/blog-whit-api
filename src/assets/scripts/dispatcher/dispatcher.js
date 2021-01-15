import { getPost, getPostList, getUser } from '../API-logic/get';
import {
  backHomePage,
  createFragmentList,
  createModalFragment,
} from '../helpers/helpers';
import { renderView } from '../views/renderView';

export let status;

export const initApp = () => {
  getPostList(0, 10).done(postList => {
    status = 'home';
    renderView(createFragmentList(postList));
  });
};

export const openPostModal = e => {
  e.preventDefault();
  getPost(e.target.id).done(({ userId, title, body }) => {
    getUser(userId).done(({ username, email }) => {
      const content = {
        username: username,
        title: title,
        body: body,
        email: email,
      };
      status = 'postModal';
      renderView(createModalFragment(content));
    });
  });
};

export const closePostModal = e => {
  e.preventDefault();
  status = 'home';
  renderView(backHomePage());
};
