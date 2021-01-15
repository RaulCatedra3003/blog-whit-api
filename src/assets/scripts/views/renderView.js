import { addEventListenersFragment } from '../helpers/helpers';
import { status } from '../dispatcher/dispatcher';

export const renderView = fragment => {
  $('#root').html(fragment);
  addEventListenersFragment(status);
};
