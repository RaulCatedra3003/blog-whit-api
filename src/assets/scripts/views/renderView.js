import { addEventListenersFragment } from '../helpers/helpers';
import { status } from '../dispatcher/dispatcher';

export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  addEventListenersFragment(status);
};
