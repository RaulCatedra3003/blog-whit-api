import { getComments, getPost, getPostList, getUser } from '../API-logic/get';
import { patchPost } from '../API-logic/patch';
import {
  backHomePage,
  createCommentsList,
  createFragmentList,
  createModalFragment,
  validateInput,
} from '../helpers/helpers';
import { DeletePostModal } from '../views/components/DeletePostModal';
import { EditPostModal } from '../views/components/EditPostModal';
import { PostModal } from '../views/components/PostModal';
import { renderView } from '../views/renderView';
import { deletePostInAPI } from '../API-logic/delete';

export const status = {
  page: 'home',
  start: 0,
  limit: 20,
  position: 1,
};

export const homeApp = () => {
  getPostList(status.start, status.limit).done(postList => {
    status.page = 'home';
    renderView(createFragmentList(postList));
    $('.nav-page__button').removeClass('selected');
    $(`.nav-page__button:nth-child(${status.position})`).addClass('selected');
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
      status.page = 'postModal';
      renderView(createModalFragment(content, PostModal));
    });
  });
};

export const closePostModal = e => {
  e.preventDefault();
  status.page = 'home';
  renderView(backHomePage());
};

export const showPostComments = e => {
  e.preventDefault();
  getComments($('#comment-button').data('postid')).done(data => {
    renderView(createCommentsList(data), '#comments-content');
  });
};

export const openEditPostModal = e => {
  e.preventDefault();
  getPost($(e.target).data('id')).done(data => {
    status.page = 'editPostModal';
    renderView(createModalFragment(data, EditPostModal));
  });
};

export const savePostChanges = e => {
  e.preventDefault();
  if (validateInput()) {
    patchPost(
      $(e.target).data('postId'),
      $('#editPostModal-Content__title').val(),
      $('#editPostModal-Content__body').text(),
    ).done(() => {
      $('.editPostModal-Content').after(
        `<p class="ok-validation">Update successful</p>`,
      );
      $('.editPostModal-Content').remove();

      setTimeout(() => {
        closePostModal(e);
        homeApp();
      }, 5000);
    });
  } else {
    $('.editPostModal-Content').after(
      `<p class="error-validation">Title needs at least 1 characters and body 10</p>`,
    );
    setTimeout(() => {
      $('.error-validation').remove();
    }, 5000);
  }
};

export const openDeletePostModal = e => {
  e.preventDefault();
  status.page = 'deletePostModal';
  renderView(createModalFragment($(e.target).data('postId'), DeletePostModal));
};

export const deletePost = e => {
  e.preventDefault();
  deletePostInAPI($(e.target).data('postId')).done(() => {
    $('.postModal-item__button').after(
      `<p class="ok-validation">Delete successful</p>`,
    );
    $('.postModal-item__button').remove();
    $('.delete-title').remove();

    setTimeout(() => {
      closePostModal(e);
      homeApp();
    }, 5000);
  });
};

export const changePostlist = e => {
  e.preventDefault();
  switch ($(e.target).text()) {
    case '1':
      status.start = 0;
      break;
    case '2':
      status.start = 20;
      break;
    case '3':
      status.start = 40;
      break;
    case '4':
      status.start = 60;
      break;
    case '5':
      status.start = 80;
      break;
  }
  homeApp();
  status.position = parseInt($(e.target).text());
};
