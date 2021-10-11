import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { ResultBoard } from '../src/components/ResultBoard';
import { act } from 'react-dom/test-utils';
import { setItemProps, getItemProps } from '../src/shared/storageManager';
import { STORAGE_KEY_NAMES } from '../src/shared/constants';
/**
 * @jest-environment jsdom
 */

jest.spyOn(window.localStorage.__proto__, 'getItem');
window.localStorage.__proto__.setItem = jest.fn();

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

it('gets item', () => {
  expect(localStorage.getItem).toHaveBeenCalled(1);
});

test('should render component', () => {
  act(() => {
    render(<ResultBoard />, container);
  });
});
