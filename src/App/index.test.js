import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { shallow } from 'enzyme';

describe('App snapshot', () => {
  it('should always match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
