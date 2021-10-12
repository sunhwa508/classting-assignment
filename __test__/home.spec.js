import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Home } from '../src/components/Home';
import { act } from 'react-dom/test-utils';

/**
 * @jest-environment jsdom
 */
let container = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});

test('should render component', () => {
  const onSelect = jest.fn();
  act(() => {
    render(<Home />, container);
  });
  act(() => {
    const button = container.querySelector('.ant-btn');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(button.innerHTML).toBe('<span>START</span>');
  });

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(onSelect).not.toHaveBeenCalled();
});

// setInterval clean up test
it('should cleanup timer', () => {
  const timer = jest.fn();
  act(() => {
    render(<Home />, container);
  });
  act(() => {
    render(null, container);
  });
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(timer).not.toHaveBeenCalled();
});
