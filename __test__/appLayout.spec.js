import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppLayout } from '../src/components/AppLayout';
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
  act(() => {
    render(<AppLayout />, container);
  });
});
