import React from 'react'
import { shallow} from 'enzyme'
import renderer from 'react-test-renderer'

import EmptyList from '../emptyList'


it('should load EmptyList without crashing', () => {
    const rendered = renderer.create(<EmptyList />).toJSON()
    expect(rendered).toMatchSnapshot()
})

it('should render the Text element', () => {
    const component = shallow(<EmptyList label='No Data Found' />)
    expect(component).toBeTruthy()
   
})
