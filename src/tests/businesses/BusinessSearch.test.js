import React from 'react';
import { mount } from 'enzyme';
import BusinessSearch from '../../components/businesses/BusinessSearch';

describe('<BusinessSearch />', () => {
	let searchBusinesses = jest.fn(()=>{})
	
	const wrapper = mount(<BusinessSearch searchBusinesses={searchBusinesses}/>);

	it('calls the search function', () => {
		let spy = jest.spyOn(wrapper.props(), 'searchBusinesses');
		wrapper.find("input[name='q']").simulate('change', {target: {value: 'andela'}})
		wrapper.find("input[name='category']").simulate('change', {target: {value: 'category'}})
		wrapper.find("input[name='location']").simulate('change', {target: {value: 'location'}})
		wrapper.find("form").simulate('submit', {preventDefault: ()=> {}})
		expect(spy).toHaveBeenCalled();
	});
});