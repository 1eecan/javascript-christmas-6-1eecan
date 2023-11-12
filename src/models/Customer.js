import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import EVENT from '../constants/Event.js';
import MENU from '../constants/Menu.js';

class Customer {
  #date;

  #order;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  getOrder(order) {
    this.#setOrder(order);
    return this.#order;
  }

  getDate(date) {
    this.#setDate(date);
    return this.#date;
  }

  #validateDate(date) {
    return !EVENT.DATE.NOT_D_DAY.includes(Number(date));
  }

  #seperateArray(inputString) {
    return inputString.split(',');
  }

  #gatherMenu(seperatedArray) {
    return seperatedArray.map((item) => item.split('-')[0]);
  }

  #makeMenuList(menuObject) {
    let menuList = [];
    const key1 = Object.keys(menuObject);
    key1.forEach((key) => {
      menuList = menuList.concat(Object.keys(menuObject[key]));
    });
    return menuList;
  }

  #gatherNumber(seperatedArray) {
    return seperatedArray.map((item) => item.split('-')[1]);
  }

  #isOverLimit(array) {
    return (
      array.reduce((acc, cur) => acc + Number(cur), 0) >
      EVENT.LIMITATION.TOTAL_MENU_NUMBER
    );
  }

  #isOnlyDrink(array) {
    const drink = Object.keys(MENU.DRINKS);
    return array.every((item) => drink.includes(item));
  }

  #validateOrder(order) {
    const seperatedArray = this.#seperateArray(order);
    const menu = this.#gatherMenu(seperatedArray);
    const numbers = this.#gatherNumber(seperatedArray);
    const menuList = this.#makeMenuList(MENU);
    return (
      menuList.length !== [...new Set([...menu, ...menuList])].length ||
      menu.length !== [...new Set(menu)].length ||
      isNaN(numbers.join('')) ||
      !numbers.every((number) => Number(number) > 0) ||
      this.#isOverLimit(numbers) ||
      this.#isOnlyDrink(menu)
    );
  }

  #setDate(date) {
    if (this.#validateDate(date)) {
      throw new Error(ERROR_MESSAGE.INVALID_DATE);
    }
    this.#date = Number(date);
  }

  #setOrder(order) {
    if (this.#validateOrder(order)) {
      throw new Error(ERROR_MESSAGE.INVALID_MENU);
    }
    const seperatedArray = this.#seperateArray(order);
    const menu = this.#gatherMenu(seperatedArray);
    const numbers = this.#gatherNumber(seperatedArray);
    this.#order = menu.reduce(
      (acc, cur, idx) => ({ ...acc, [cur]: Number(numbers[idx]) }),
      {}
    );
  }
}

export default Customer;
