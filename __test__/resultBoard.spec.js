import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { ResultBoard } from '../src/components/ResultBoard';
import { act } from 'react-dom/test-utils';

import { storagePropsManager } from '../src/shared/storageManager';
import { STORAGE_KEY_NAMES } from '../src/shared/constants';
/**
 * @jest-environment jsdom
 */

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RESULT_DATA, {
      score: 1,
      data: { response_code: 0, results: [] },
    });
  });

  it('get the values to the storage', () => {
    const items = storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RESULT_DATA);
    expect(items).toEqual(JSON.parse('{"data": {"response_code": 0, "results": []}, "score": 1}'));
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
});

// test('should render component', () => {
//   act(() => {
//     render(<ResultBoard />, container);
//   });
// });
