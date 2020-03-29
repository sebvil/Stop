import {CATEGORIES} from '_assets/constants';
import * as _ from 'underscore';

export const generateCategories = async () => {
  const game_categories = _.sample(CATEGORIES, 7);
  return game_categories;
};
