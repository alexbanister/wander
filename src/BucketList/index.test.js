import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import BucketListContainer, { BucketList } from './index';
import React from 'react';


describe('BucketListContainer', () => {
  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(<BucketListContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('BucketList', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<BucketList
      destinations={[]}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state', () => {
    const expected = {
      destination: 'DE',
      airports: []
    };

    const wrapper = shallow(<BucketList
      destinations={[]}
    />);

    expect(wrapper).toMatchSnapshot();

    const destination = wrapper.find('[type="text"]');

    destination.simulate('change', {target: {value: 'DE'}});

    expect(wrapper.state()).toEqual(expected);
  });
});
