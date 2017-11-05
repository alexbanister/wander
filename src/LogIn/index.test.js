import { shallow } from 'enzyme';
import { LogIn } from './index';
import React from 'react';


describe('LogIn', () => {
  it('should always match the snapshot', () => {
    const wrapper = shallow(<LogIn />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state', () => {
    const expected = {
      email: 'email@email.com',
      password: 'password',
      disabled: true
    };

    const wrapper = shallow(<LogIn
      handleSubmit={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();

    const email = wrapper.find('input').first();
    const password = wrapper.find('input').last();

    email.simulate('change', {target: {value: 'email@email.com'}});
    password.simulate('change', {target: {value: 'password'}});

    expect(wrapper.state()).toEqual(expected);
  });
});
