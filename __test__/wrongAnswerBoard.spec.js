import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { WrongAnswerBoard } from '../src/components/WrongAnswerBoard';
import { act } from 'react-dom/test-utils';
import { ConvertQuestion } from '../src/shared/rule';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

test('should render component', () => {
  act(() => {
    render(<WrongAnswerBoard />, container);
  });
});

it('renders with Result', () => {
  configure({ adapter: new Adapter() });
  const columns = [
    {
      title: 'question',
      dataIndex: 'question',
      key: 'question',
      width: '60%',
      render: (text) => ConvertQuestion(text),
    },
    {
      title: 'correct answer',
      dataIndex: 'correct_answer',
      key: 'correct_answer',
      render: (text) => ConvertQuestion(text),
    },
    {
      title: 'your answer',
      dataIndex: 'your_answer',
      key: 'your_answer',
      render: (text) => ConvertQuestion(text),
    },
  ];

  const wrapper = shallow(<WrongAnswerBoard />); // Rendering
  expect(wrapper.find('Table').length).toBe(1); // Has Result component
});
