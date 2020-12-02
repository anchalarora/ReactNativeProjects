import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../searchBar';
import {shallow} from 'enzyme';

it('should load search bar view without crashing', () => {
  const searchBarRenderer = renderer.create(<SearchBar />).toJSON();
  expect(searchBarRenderer).toBeTruthy();
});

it('should change state if zipCode is entered', () => {
  const seachBarInstance = renderer
    .create(<SearchBar lable="Search" />)
    .getInstance();
  //console.log(seachBarInstance)
  seachBarInstance.setZipCode('560075');
  expect(seachBarInstance.state.pincode).toEqual('560075');
});

it('should load search bar view without crashing', () => {
  const searchBarComponent = shallow(<SearchBar />);
  expect(searchBarComponent).toMatchSnapshot();
});

it('should load search bar view without crashing', () => {
  const searchBarComponent = renderer.create(<SearchBar />).toJSON();
  expect(searchBarComponent).toMatchSnapshot();
});

let findElement = function (tree, element) {
  let result = undefined;
  for (let i = 0; i < tree.children.length; i++) {
    let childObject = tree.children[i];
    for (let j = 0; j < childObject.children.length; j++) {
      if (childObject.children[j].props.testID == element) {
        result = true;
      }
    }
  }

  return result;

  //   let result = undefined;
  //   let node;
  //   for (node in tree.children) {
  //     if (tree.children[node].children[node].props.testID == element) {
  //       console.log(
  //         'Inside for loop   ',
  //         tree.children[node].children[node].props.testID,
  //       );
  //       result = true;
  //     }
  //   }
  //   return result;
};

it('find TextInput in SearchBar', () => {
  let tree = renderer.create(<SearchBar />).toJSON();
  expect(findElement(tree, 'zipCodeInput')).toBeDefined();
});

it('find Button in SearchBar', () => {
  let tree = renderer.create(<SearchBar />).toJSON();
  expect(findElement(tree, 'searchButton')).toBeDefined();
});
