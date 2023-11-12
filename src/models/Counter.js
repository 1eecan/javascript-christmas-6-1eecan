import EVENT from '../constants/Event.js';
import MENU from '../constants/Menu.js';

class Counter {
  #order;

  #date;

  #event;

  #menuList = {};

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(date, order) {
    this.#date = date;
    this.#order = order;
    Object.keys(MENU).forEach((item) => {
      this.#menuList = { ...this.#menuList, ...MENU[item] };
    });
    this.#event = this.#isEventOccured();
  }

  getTotalAmount() {
    return Object.keys(this.#order).reduce(
      (acc, cur) => acc + this.#menuList[cur] * this.#order[cur],
      0
    );
  }

  getTotalBenefit() {
    return (
      this.dDayDiscount() +
      this.weekdayDiscount() +
      this.holidayDiscount() +
      this.specialDiscount() +
      this.presentEvent()
    );
  }

  getTotalDiscount() {
    return (
      this.dDayDiscount() +
      this.weekdayDiscount() +
      this.holidayDiscount() +
      this.specialDiscount()
    );
  }

  #isEventOccured() {
    return (
      Object.keys(this.#order).reduce(
        (acc, cur) => acc + this.#menuList[cur] * this.#order[cur],
        0
      ) >= EVENT.LIMITATION.TOTAL_AMOUNT
    );
  }

  dDayDiscount() {
    return this.#event && EVENT.DATE.D_DAY.includes(this.#date)
      ? EVENT.DISCOUNT.D_DAY_START +
          EVENT.DISCOUNT.D_DAY_DAILY * (this.#date - 1)
      : 0;
  }

  weekdayDiscount() {
    const dessert = Object.keys(MENU.DESSERT);
    return this.#event && EVENT.DATE.WEEKDAY.includes(this.#date)
      ? EVENT.DISCOUNT.NOT_D_DAY *
          Object.keys(this.#order)
            .filter((item) => dessert.includes(item))
            .reduce((acc, cur) => acc + this.#order[cur], 0)
      : 0;
  }

  holidayDiscount() {
    const main = Object.keys(MENU.MAIN);
    return this.#event && EVENT.DATE.HOLIDAY.includes(this.#date)
      ? EVENT.DISCOUNT.NOT_D_DAY *
          Object.keys(this.#order)
            .filter((item) => main.includes(item))
            .reduce((acc, cur) => acc + this.#order[cur], 0)
      : 0;
  }

  specialDiscount() {
    return this.#event && EVENT.DATE.SPECIAL.includes(this.#date)
      ? EVENT.DISCOUNT.SPECIAL
      : 0;
  }

  presentEvent() {
    return this.#event &&
      Object.keys(this.#order).reduce(
        (acc, cur) => acc + this.#menuList[cur] * this.#order[cur],
        0
      ) >= EVENT.DISCOUNT.PRESENT
      ? MENU.DRINKS.샴페인
      : 0;
  }

  isBadge() {
    const totalBenefit = this.getTotalBenefit();
    if (totalBenefit >= EVENT.BADGE.SANTA) {
      return EVENT.BADGE.SANTA;
    }
    if (totalBenefit >= EVENT.BADGE.TREE) {
      return EVENT.BADGE.TREE;
    }
    if (totalBenefit >= EVENT.BADGE.STAR) {
      return EVENT.BADGE.STAR;
    }
    return false;
  }
}

export default Counter;
