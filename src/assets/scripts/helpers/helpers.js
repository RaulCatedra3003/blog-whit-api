import { openModal } from '../dispatcher/dispatcher';
import { Navbar } from '../views/components/Navbar';
import { Post } from '../views/components/Post';

export const createFragmentList = data => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append(Navbar);
  data.forEach(element => {
    $(fragment).append(Post(element));
  });
  return fragment;
};

export const addEventListenersFragment = () => {
  $('.post-item__content h2').each((index, element) => {
    $(element).on('click', openModal);
  });
};
