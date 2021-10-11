import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppLayout } from '../src/components/AppLayout';
import { act } from 'react-dom/test-utils';

/**
 * @jest-environment jsdom
 */
let container = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('should render component', () => {
  act(() => {
    render(<AppLayout />, container);
  });
});
