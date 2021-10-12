import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { DashBoard } from '../src/components/DashBoard';
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

it('should render component', () => {
  act(() => {
    render(<DashBoard />, container);
  });
});

//https://jaketrent.com/post/mock-fetch-jest-test
it('should fetch data', async () => {
  const fakeData = {
    response_code: 0,
    results: [
      {
        category: 'General Knowledge',
        type: 'multiple',
        difficulty: 'medium',
        question: 'What is the Swedish word for &quot;window&quot;?',
        correct_answer: 'F&ouml;nster',
        incorrect_answers: ['H&aring;l', 'Sk&auml;rm', 'Ruta'],
      },
    ],
  };

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );
  const res = await fetch('anyUrl');
  const json = await res.json();
  expect(json).toBe(fakeData);

  global.fetch.mockClear();
  delete global.fetch;
});
