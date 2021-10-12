import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Home } from '../src/components/Home';
import { act } from 'react-dom/test-utils';

/**
 * @jest-environment jsdom
 */
let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});

test('should render component, timer test', () => {
  const onSelect = jest.fn();
  act(() => {
    render(<Home />, container);
  });
  act(() => {
    const button = container.querySelector('.ant-btn');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(button.innerHTML).toBe('<span>수락하기 🎮</span>');
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
