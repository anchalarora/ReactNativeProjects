import React from 'react'
import renderer from 'react-test-renderer'

import ActivityIndicatorComponent from '../activityIndicatorComponent'


it('should load Activity Indicator without crashing', () => {
    const rendered = renderer.create(<ActivityIndicatorComponent />).toJSON()
    expect(rendered).toBeTruthy()
})


it('should load Activity Indicator without crashing', () => {
    const rendered = renderer.create(<ActivityIndicatorComponent />).toJSON()
    expect(rendered).toMatchSnapshot()
})