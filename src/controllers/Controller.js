import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import Customer from '../models/Customer.js';
import Receipt from '../models/Receipt.js';

class Controller {
  #date;

  #order;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  async askDate() {
    while (true) {
      try {
        this.#date = new Customer().getDate(await InputView.readDate());
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async askOrder() {
    while (true) {
      try {
        this.#order = new Customer().getOrder(await InputView.readOrder());
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  showResult(date, order) {
    const receipt = new Receipt(date, order);
    OutputView.printPreview(date);
    OutputView.printMenu(receipt.orderedMenu());
    OutputView.printTotalAmountBeforeDiscount(
      receipt.totalAmountBeforeDiscount()
    );
    OutputView.printPresentMenu(receipt.presentMenu());
    OutputView.printBenefitDetails(receipt.benefitDetails());
    OutputView.printTotalBenefitAmount(receipt.totalBenefitAmount());
    OutputView.printPaymentAfterDiscount(receipt.paymentAfterDiscount());
    OutputView.printEventBadge(receipt.eventBadge());
  }

  async run() {
    await this.askDate();
    await this.askOrder();
    this.showResult(this.#date, this.#order);
  }
}

export default Controller;
