import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AnswerBoard } from '../src/components/AnswerBoard';
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

test('should render component', () => {
  const handleAnswer = jest.fn();

  act(() => {
    render(<AnswerBoard handleAnswer={handleAnswer} correct={'1'} incorrect={[]} />, container);
  });

  const button = document.querySelector('.ant-card-bordered');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(handleAnswer).toHaveBeenCalledTimes(0);
});
