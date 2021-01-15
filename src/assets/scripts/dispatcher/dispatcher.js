import { getComments, getPost, getPostList, getUser } from '../API-logic/get';
import {
  backHomePage,
  createCommentsList,
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
  getPost(e.target.id).done(({ userId, title, body, id }) => {
    getUser(userId).done(({ username, email }) => {
      const content = {
        username: username,
        title: title,
        body: body,
        email: email,
        postId: id,
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

export const showPostComments = e => {
  e.preventDefault();
  getComments($('#comment-button').data('postid')).done(data => {
    renderView(createCommentsList(data), '#comments-content');
  });
};
