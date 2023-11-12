const EVENT = Object.freeze({
  DATE: {
    D_DAY: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
    NOT_D_DAY: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    WEEKDAY: [
      3, 4, 5, 6, 7, 19, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 27,
      31,
    ],
    HOLIDAY: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
    SPECIAL: [3, 10, 17, 24, 25, 31],
  },
  DISCOUNT: {
    D_DAY_START: 1000,
    D_DAY_DAILY: 100,
    NOT_D_DAY: 2023,
    SPECIAL: 1000,
    PRESENT: 120000,
  },
  BADGE: {
    STAR: 5000,
    TREE: 10000,
    SANTA: 20000,
  },
  LIMITATION: {
    TOTAL_AMOUNT: 10000,
    TOTAL_MENU_NUMBER: 20,
  },
  MESSAGE: {
    D_DAY: (price) => `크리스마스 디데이 할인: -${price}원`,
    WEEKDAY: (price) => `평일 할인: -${price}원`,
    HOLIDAY: (price) => `주말 할인: -${price}원`,
    SPECIAL: (price) => `특별 할인: -${price}원`,
    PRESENT: (price) => `증정 이벤트: -${price}원`,
  },
});

export default EVENT;
