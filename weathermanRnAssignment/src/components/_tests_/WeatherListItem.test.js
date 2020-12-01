import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import WeatherListItem from '../weatherListItem'


it('should load flat list item view without crashing', () => {
    const rendered = renderer.create(<WeatherListItem />).toJSON()
    expect(rendered).toBeTruthy()
})


it('should render the Text element', () => {
    const component = shallow(<WeatherListItem item1='Humidity: 69' item2='Temp: 297.53' />)
    expect(component).toMatchSnapshot()
})
