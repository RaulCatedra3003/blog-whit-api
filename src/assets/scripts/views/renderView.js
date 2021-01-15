import { addEventListenersFragment } from '../helpers/helpers';
import { Navbar } from './components/Navbar';

export const renderView = fragment => {
  $('#root').html(fragment);
  addEventListenersFragment();
};
