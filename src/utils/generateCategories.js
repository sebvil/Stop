import {CATEGORIES} from '_assets/constants';

export const generateCategories = async () => {
  const game_categories = [];
  let categoryArr = [...CATEGORIES];
  while (game_categories.length < 7) {
    const index = Math.floor(Math.random() * categoryArr.length);
    const category = categoryArr[index];
    game_categories.push(category);
    console.log(category);
    console.log(category.includes('Nombre'));
    categoryArr.splice(index, 1);
    const words = category.split(' ');
    words.forEach((element) => {
      if (!['o', 'de'].includes(element)) {
        categoryArr = categoryArr.filter((value) => {
          return !value.includes(element);
        });
      }
    });
    if (['Mamífero', 'Ave'].includes(category)) {
      categoryArr = categoryArr.filter((value) => {
        return value !== 'Animal';
      });
    }
    if (category === 'Animal') {
      categoryArr = categoryArr.filter((value) => {
        return !['Mamífero', 'Ave'].includes(category);
      });
    }
  }
  return game_categories;
};
