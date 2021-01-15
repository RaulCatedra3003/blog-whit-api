import { openModal } from '../dispatcher/dispatcher';
import { Navbar } from '../views/components/Navbar';
import { Post } from '../views/components/Post';
import { PostModal } from '../views/components/PostModal';
import { openPostModal } from '../dispatcher/dispatcher';
import { closePostModal } from '../dispatcher/dispatcher';

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
