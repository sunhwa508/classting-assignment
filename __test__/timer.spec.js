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
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
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
  act(() => {
    render(<Timer />, container);
  });
});
