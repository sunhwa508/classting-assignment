import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { QuestionBoard } from '../src/components/QuestionBoard';
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

test('should render component, test text', () => {
  act(() => {
    render(
      <QuestionBoard question={'&lt;'} category={'Sports'} currentStage={1} difficulty={'easy'} />,
      container
    );
  });
  expect(container.querySelector('.ant-typography').textContent).toBe('Q2. <');
  expect(container.querySelector('.ant-tag').textContent).toBe('easy');
});
