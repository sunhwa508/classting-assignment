import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { ResultBoard } from '../src/components/ResultBoard';
import { storagePropsManager } from '../src/shared/storageManager';
import { STORAGE_KEY_NAMES } from '../src/shared/constants';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { act } from '@testing-library/react';

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

// storageManager TEST
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

describe('storage TEST', () => {
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

    storagePropsManager.setItemProps(STORAGE_KEY_NAMES.RECORD, 10);
  });

  it('get the values to the storage', () => {
    const items = storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RESULT_DATA);
    expect(items).toEqual(JSON.parse('{"data": {"response_code": 0, "results": []}, "score": 1}'));

    const record = storagePropsManager.getItemProps(STORAGE_KEY_NAMES.RECORD);
    expect(record).toEqual(JSON.parse(10));
  });
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

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('should render component', () => {
  configure({ adapter: new Adapter() });

  const wrapper = shallow(<ResultBoard />);

  const card = wrapper.find('.wrong-note');
  expect(card.length).toBe(1);
  card.simulate('click');
});
