import { shallow } from 'enzyme';
import { SignUp } from './index';
import React from 'react';


describe('SignUp', () => {
  it('should always match the snapshot', () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state', () => {
    const expected = {
      name: 'Billy Bob',
      email: 'email@email.com',
      password: 'password',
      retypePassword: 'password',
      signUpError: false,
      disabled: false,
      passwordValidationError: false
    };

    const wrapper = shallow(<SignUp
      handleSubmit={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();

    const name = wrapper.find('[type="text"]');
    const email = wrapper.find('[type="email"]');
    const password = wrapper.find('[type="password"]').first();
    const repassword = wrapper.find('[type="password"]').last();

    name.simulate('change', {target: {value: 'Billy Bob'}});
    email.simulate('change', {target: {value: 'email@email.com'}});
    password.simulate('change', {target: {value: 'password'}});
    repassword.simulate('change', {target: {value: 'password'}});

    expect(wrapper.state()).toEqual(expected);
  });
});
