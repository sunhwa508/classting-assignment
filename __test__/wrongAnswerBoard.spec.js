import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { WrongAnswerBoard } from '../src/components/WrongAnswerBoard';
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

it('renders component with Result', () => {
  act(() => {
    render(<WrongAnswerBoard />, container);
    expect(container.querySelector('Table').textContent).toBe(
      'questioncorrect answeryour answerNo Data'
    );
  });
});
