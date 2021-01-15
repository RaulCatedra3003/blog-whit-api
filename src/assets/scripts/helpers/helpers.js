import { Navbar } from '../views/components/Navbar';
import { Post } from '../views/components/Post';
import { PostModal } from '../views/components/PostModal';
import {
  openPostModal,
  closePostModal,
  showPostComments,
  openEditPostModal,
  savePostChanges,
  openDeletePostModal,
  deletePost,
} from '../dispatcher/dispatcher';
import { Comment } from '../views/components/Comment';
import { EditPostModal } from '../views/components/EditPostModal';

export const createFragmentList = data => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append(Navbar);
  data.forEach(element => {
    $(fragment).append(Post(element));
  });
  return fragment;
};

export const addEventListenersFragment = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('.post-item__content h2').on('click', openPostModal);
      $('.bx-edit').on('click', openEditPostModal);
      $('.bxs-trash').on('click', openDeletePostModal);
      break;
    case 'postModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#comment-button').on('click', showPostComments);
      break;
    case 'editPostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#save-button').on('click', savePostChanges);
    case 'deletePostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#yes-button').on('click', deletePost);
      $('#no-button').on('click', closePostModal);
  }
};

export const createModalFragment = (content, modalType) => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append($('#root').html());
  $(fragment).append(modalType(content));
  return fragment;
};

export const backHomePage = () => {
  $('#root').children().last().remove();
  const fragment = $(document.createDocumentFragment());
  $(fragment).append($('#root').html());
  return fragment;
};

export const createCommentsList = data => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(Comment(element));
  });
  return fragment;
};

export const validateInput = () => {
  return (
    $('#editPostModal-Content__title').val().length > 1 &&
    $('#editPostModal-Content__body').text().length > 10
  );
};
