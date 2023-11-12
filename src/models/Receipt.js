import EVENT from '../constants/Event.js';
import Counter from './Counter.js';

class Receipt {
  #order;

  #counter;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(date, order) {
    this.#order = order;
    this.#counter = new Counter(date, order);
  }

  orderedMenu() {
    return Object.entries(this.#order).map(
      ([key, value]) => `${key} ${value}개`
    );
  }

  totalAmountBeforeDiscount() {
    return `${this.#counter.getTotalAmount().toLocaleString()}원`;
  }

  presentMenu() {
    if (this.#counter.presentEvent() !== 0) {
      return `샴페인 1개`;
    }
    return '없음';
  }

  #dDayDiscountToLocaleString() {
    if (this.#counter.dDayDiscount() !== 0)
      return EVENT.MESSAGE.D_DAY(this.#counter.dDayDiscount().toLocaleString());
  }

  #weekdayDiscountToLocaleString() {
    if (this.#counter.weekdayDiscount() !== 0)
      return EVENT.MESSAGE.WEEKDAY(
        this.#counter.weekdayDiscount().toLocaleString()
      );
  }

  #holidayDiscountToLocaleString() {
    if (this.#counter.holidayDiscount() !== 0)
      return EVENT.MESSAGE.HOLIDAY(
        this.#counter.holidayDiscount().toLocaleString()
      );
  }

  #specialDiscountToLocalString() {
    if (this.#counter.specialDiscount() !== 0)
      return EVENT.MESSAGE.SPECIAL(
        this.#counter.specialDiscount().toLocaleString()
      );
  }

  #presentEventToLocaleString() {
    if (this.#counter.presentEvent() !== 0)
      return EVENT.MESSAGE.PRESENT(
        this.#counter.presentEvent().toLocaleString()
      );
  }

  benefitDetails() {
    if (this.#counter.getTotalBenefit() === 0) return [`없음`];
    return [
      this.#dDayDiscountToLocaleString(),
      this.#weekdayDiscountToLocaleString(),
      this.#holidayDiscountToLocaleString(),
      this.#specialDiscountToLocalString(),
      this.#presentEventToLocaleString(),
    ].filter((item) => item !== undefined);
  }

  totalBenefitAmount() {
    if (this.#counter.getTotalBenefit() === 0) {
      return '0원';
    }
    return `-${this.#counter.getTotalBenefit().toLocaleString()}원`;
  }

  paymentAfterDiscount() {
    return `${(
      this.#counter.getTotalAmount() - this.#counter.getTotalDiscount()
    ).toLocaleString()}원`;
  }

  eventBadge() {
    const badge = this.#counter.isBadge();
    if (!badge) return '없음';
    if (badge === EVENT.BADGE.SANTA) return '산타';
    if (badge === EVENT.BADGE.TREE) return '트리';
    if (badge === EVENT.BADGE.STAR) return '별';
  }
}

export default Receipt;
