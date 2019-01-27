import {shallow} from 'enzyme'
import React from 'react'
import DashboardPage from '../../components/DashboardPage'

test('should render Dashboard Page component with expenses', () => {
  const wrapper = shallow(<DashboardPage/>)
  expect(wrapper).toMatchSnapshot()
})