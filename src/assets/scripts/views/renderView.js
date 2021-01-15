import { Navbar } from './components/Navbar';

export const renderView = fragment => {
  $(fragment).prepend(Navbar);
  $('#root').html(fragment);
};
