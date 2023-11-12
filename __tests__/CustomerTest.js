import Customer from '../src/models/Customer.js';

describe('Customer 클래스 테스트', () => {
  test('메뉴를 정상적으로 입력', () => {
    expect(
      new Customer().getOrder(
        '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1'
      )
    ).toMatchObject({
      티본스테이크: 1,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    });
  });
  test('메뉴를 중복 입력하면 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('시저샐러드-1,시저샐러드-1');
    }).toThrow('[ERROR]');
  });
  test('메뉴판에 없는 메뉴를 입력하면 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('해산물파스타-2,레드와인-1,초코케이크-1,라면-3');
    }).toThrow('[ERROR]');
  });
  test('메뉴 수량에 0을 입력하면 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('해산물파스타-2,레드와인-1,초코케이크-0');
    }).toThrow('[ERROR]');
  });
  test('메뉴 수량에 문자를 입력하면 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('해산물파스타-2,레드와인-1,초코케이크-a');
    }).toThrow('[ERROR]');
  });
  test('메뉴 수량 총 합이 20을 넘어갈 경우 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('해산물파스타-12,레드와인-7,초코케이크-2');
    }).toThrow('[ERROR]');
  });
  test('음료만 주문할 경우 에러 출력', () => {
    expect(() => {
      new Customer().getOrder('제로콜라-1,레드와인-7,샴페인-2');
    }).toThrow('[ERROR]');
  });
  test('방문 날짜가 31을 넘어갈 경우 에러 출력', () => {
    expect(() => {
      new Customer().getDate('32');
    }).toThrow('[ERROR]');
  });
  test('방문 날짜가 1을 보다 작을 경우 에러 출력', () => {
    expect(() => {
      new Customer().getDate('-1');
    }).toThrow('[ERROR]');
  });
  test('방문 날짜가 1~31 사이일 경우 정상 출력', () => {
    expect(new Customer().getDate('11')).toBe(11);
  });
});
