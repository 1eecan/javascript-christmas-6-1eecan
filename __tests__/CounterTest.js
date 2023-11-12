import Counter from '../src/models/Counter.js';

describe('Counter 클래스 테스트', () => {
  test('크리스마스 디데이 할인 적용될 경우', () => {
    expect(
      new Counter(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).dDayDiscount()
    ).toBe(1200);
  });
  test('크리스마스 디데이 할인 적용안될 경우', () => {
    expect(
      new Counter(26, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).dDayDiscount()
    ).toBe(0);
  });
  test('평일 할인 적용될 경우', () => {
    expect(
      new Counter(4, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).weekdayDiscount()
    ).toBe(2023 * 2);
  });
  test('평일 할인 적용 안될 경우', () => {
    expect(
      new Counter(8, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).weekdayDiscount()
    ).toBe(0);
  });
  test('주말 할인 적용될 경우', () => {
    expect(
      new Counter(8, {
        티본스테이크: 1,
        바비큐립: 2,
        초코케이크: 2,
        제로콜라: 1,
      }).holidayDiscount()
    ).toBe(2023 * 3);
  });
  test('주말 할인 적용 안될 경우', () => {
    expect(
      new Counter(4, {
        티본스테이크: 1,
        바비큐립: 2,
        초코케이크: 2,
        제로콜라: 1,
      }).holidayDiscount()
    ).toBe(0);
  });
  test('특별 할인 적용될 경우', () => {
    expect(
      new Counter(25, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).specialDiscount()
    ).toBe(1000);
  });
  test('특별 할인 적용 안될 경우', () => {
    expect(
      new Counter(26, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).specialDiscount()
    ).toBe(0);
  });
  test('증정 이벤트 적용될 경우', () => {
    expect(
      new Counter(25, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).presentEvent()
    ).toBe(25000);
  });
  test('증정 이벤트 적용 안될 경우', () => {
    expect(
      new Counter(25, {
        티본스테이크: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).presentEvent()
    ).toBe(0);
  });
  test('이벤트 배지가 별인 경우', () => {
    expect(
      new Counter(25, {
        티본스테이크: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).isBadge()
    ).toBe(5000);
  });
  test('이벤트 배지가 트리인 경우', () => {
    expect(
      new Counter(25, {
        티본스테이크: 1,
        초코케이크: 3,
        제로콜라: 1,
      }).isBadge()
    ).toBe(10000);
  });
  test('이벤트 배지가 산타인 경우', () => {
    expect(
      new Counter(23, {
        티본스테이크: 2,
        초코케이크: 3,
        제로콜라: 1,
      }).isBadge()
    ).toBe(20000);
  });
});
