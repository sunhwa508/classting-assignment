import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Header } from '../src/components/Header';
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

test('should render component, test textContent', () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.querySelector('.ant-page-header-heading-title').textContent).toBe('오퀴즈 게임');
  expect(container.querySelector('.ant-page-header-heading-sub-title').textContent).toBe(
    '보는 것이 하는 것보다 더 재미있을 수가 없지 🦑'
  );
});
