import React from 'react'
import { mount } from 'enzyme';
import Paginator from '../../components/shared/Paginator';

describe('<Paginator />', () => {
	it('should call handlePageChange on prev click', () => {
		let wrapper = mount(<Paginator
			prev_page={1}
			next_page={''}
			handlePageChange={jest.fn()}
		/>);
		let spy = jest.spyOn(wrapper.props(), 'handlePageChange')
		wrapper.find('button#prev_page').simulate('click', {preventDefault: () => {}})
		expect(spy).toHaveBeenCalled();
	})

	it('should call handlePageChange on next click', () => {
		let wrapper = mount(<Paginator
			prev_page={''}
			next_page={2}
			handlePageChange={jest.fn()}
		/>);
		let spy = jest.spyOn(wrapper.props(), 'handlePageChange')
		wrapper.find('button#next_page').simulate('click', {preventDefault: () => {}})
		expect(spy).toHaveBeenCalled();
	});
})