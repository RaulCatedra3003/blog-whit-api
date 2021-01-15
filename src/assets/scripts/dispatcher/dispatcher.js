import { getPostList } from '../API-logic/get';
import { createFragmentList } from '../helpers/helpers';
import { renderView } from '../views/renderView';

export const initApp = () => {
  getPostList(0, 10).done(postList => {
    renderView(createFragmentList(postList));
  });
};
