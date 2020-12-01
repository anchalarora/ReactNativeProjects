import React from 'react'
import renderer from 'react-test-renderer'

import ListSeperator from '../listSeperator'


it('should load ListSeperator without crashing', () => {
    const rendered = renderer.create(<ListSeperator />).toJSON()
    expect(rendered).toBeTruthy()
})