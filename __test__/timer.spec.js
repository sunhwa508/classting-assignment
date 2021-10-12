import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Timer } from '../src/components/Timer';
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

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test('should render component, timer', () => {
  const timer = jest.fn();
  act(() => {
    render(<Timer />, container);
  });

  // setInterval 1초 test
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(timer).not.toHaveBeenCalled();
});

// setInterval clean up test
it('should cleanup timer', () => {
  const timer = jest.fn();
  act(() => {
    render(<Timer />, container);
  });
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(timer).not.toHaveBeenCalled();

  act(() => {
    render(null, container);
  });
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(timer).not.toHaveBeenCalled();
});
