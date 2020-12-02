import React from 'react'
import renderer from 'react-test-renderer'

import SearchBar from '../searchBar'
import {shallow} from 'enzyme'


it('should load search bar view without crashing', () => {

    const searchBarRenderer = renderer.create(<SearchBar />).toJSON()
    expect(searchBarRenderer).toBeTruthy()

})

it('should change state if zipCode is entered',()=>{
    const seachBarInstance = renderer.create(<SearchBar lable="Search" />).getInstance()
    console.log(seachBarInstance)
    seachBarInstance.setZipCode('560075')
    expect(seachBarInstance.state.pincode).toEqual('560075')
})

it('should load search bar view without crashing', () => {

    const searchBarComponent = shallow(<SearchBar />)
    expect(searchBarComponent).toMatchSnapshot()

})


it('should load search bar view without crashing', () => {

    const searchBarComponent = renderer.create(<SearchBar />).toJSON()
    expect(searchBarComponent).toMatchSnapshot()

})

