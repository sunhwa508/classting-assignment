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

test('should render component', async () => {
  // const fakeData = {
  //   response_code: 0,
  //   results: [
  //     {
  //       category: 'General Knowledge',
  //       type: 'multiple',
  //       difficulty: 'medium',
  //       question: 'What is the Swedish word for &quot;window&quot;?',
  //       correct_answer: 'F&ouml;nster',
  //       incorrect_answers: ['H&aring;l', 'Sk&auml;rm', 'Ruta'],
  //     },
  //   ],
  // };

  // jest.spyOn(global, 'fetch').mockImplementation(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(fakeData),
  //   })
  // );

  await act(async () => {
    render(<DashBoard />, container);
  });

  // expect(container.querySelector('.ant-alert-message').textContent).toBe(fakeData.category);
  // expect(container.querySelector('.ant-tag').textContent).toBe(fakeData.difficulty);

  // global.fetch.mockRestore();
});
