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
    render(
      <AnswerBoard handleAnswer={handleAnswer} correct={'1'} incorrect={['1', '2', '3', '4']} />,
      container
    );
  });

  const card = document.querySelector('.ant-card-body');

  act(() => {
    card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
});
