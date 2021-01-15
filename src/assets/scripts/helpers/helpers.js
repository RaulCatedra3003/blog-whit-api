import { Navbar } from '../views/components/Navbar';
import { Post } from '../views/components/Post';
import { PostModal } from '../views/components/PostModal';
import {
  openPostModal,
  closePostModal,
  showPostComments,
} from '../dispatcher/dispatcher';
import { Comment } from '../views/components/Comment';

export const createFragmentList = data => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append(Navbar);
  data.forEach(element => {
    $(fragment).append(Post(element));
  });
  return fragment;
};

export const addEventListenersFragment = status => {
  switch (status) {
    case 'home':
      $('.post-item__content h2').each((index, element) => {
        $(element).on('click', openPostModal);
      });
      break;
    case 'postModal':
      $('.post-item__content h2').each((index, element) => {
        $(element).off('click', openPostModal);
      });
      $('.bx-x-circle').on('click', closePostModal);
      $('#comment-button').on('click', showPostComments);
  }
};

export const createModalFragment = content => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append($('#root').html());
  $(fragment).append(PostModal(content));
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
