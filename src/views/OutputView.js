import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPreview(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printMenu(array) {
    Console.print('\n<주문 메뉴>');
    array.forEach((item) => {
      Console.print(item);
    });
  },

  printTotalAmountBeforeDiscount(data) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(data);
  },

  printPresentMenu(data) {
    Console.print('\n<증정 메뉴>');
    Console.print(data);
  },

  printBenefitDetails(array) {
    Console.print('\n<혜택 내역>');
    array.forEach((item) => {
      Console.print(item);
    });
  },

  printTotalBenefitAmount(data) {
    Console.print('\n<총혜택 금액>');
    Console.print(data);
  },

  printPaymentAfterDiscount(data) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(data);
  },

  printEventBadge(data) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(data);
  },
};

export default OutputView;
