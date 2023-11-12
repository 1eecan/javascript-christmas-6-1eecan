import Receipt from '../src/models/Receipt.js';

describe('Receipt 클래스 테스트', () => {
  test('orderedMenu 메소드 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).orderedMenu()
    ).toMatchObject([
      '티본스테이크 1개',
      '바비큐립 1개',
      '초코케이크 2개',
      '제로콜라 1개',
    ]);
  });
  test('totalAmountBeforeDiscount 메소드 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).totalAmountBeforeDiscount()
    ).toBe('142,000원');
  });
  test('presentMenu 메소드 샴페인 1개 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).presentMenu()
    ).toBe('샴페인 1개');
  });
  test('presentMenu 메소드 없음 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        제로콜라: 1,
      }).presentMenu()
    ).toBe('없음');
  });
  test('benefitDetails 메소드 weekday 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).benefitDetails()
    ).toStrictEqual([
      '크리스마스 디데이 할인: -1,200원',
      '평일 할인: -4,046원',
      '특별 할인: -1,000원',
      '증정 이벤트: -25,000원',
    ]);
  });

  test('benefitDetails 메소드 holiday 테스트', () => {
    expect(
      new Receipt(8, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).benefitDetails()
    ).toStrictEqual([
      '크리스마스 디데이 할인: -1,700원',
      '주말 할인: -4,046원',
      '증정 이벤트: -25,000원',
    ]);
  });
  test('benefitDetails 메소드 없음 테스트', () => {
    expect(
      new Receipt(26, {
        아이스크림: 1,
        제로콜라: 1,
      }).benefitDetails()
    ).toStrictEqual(['없음']);
  });
  test('totalBenefitAmount 메소드 0원 테스트', () => {
    expect(
      new Receipt(26, {
        아이스크림: 1,
        제로콜라: 1,
      }).totalBenefitAmount()
    ).toBe('0원');
  });
  test('totalBenefitAmount 메소드 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).totalBenefitAmount()
    ).toBe('-31,246원');
  });
  test('paymentAfterDiscount 메소드 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).paymentAfterDiscount()
    ).toBe('135,754원');
  });
  test('eventBadge 메소드 없음 테스트', () => {
    expect(
      new Receipt(3, {
        아이스크림: 1,
        제로콜라: 1,
      }).eventBadge()
    ).toBe('없음');
  });
  test('eventBadge 메소드 산타 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        바비큐립: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).eventBadge()
    ).toBe('산타');
  });
  test('eventBadge 메소드 트리 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        초코케이크: 4,
        제로콜라: 1,
      }).eventBadge()
    ).toBe('트리');
  });
  test('eventBadge 메소드 별 테스트', () => {
    expect(
      new Receipt(3, {
        티본스테이크: 1,
        초코케이크: 2,
        제로콜라: 1,
      }).eventBadge()
    ).toBe('별');
  });
});
