import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import EmptyList from '../emptyList';

it('should load EmptyList without crashing', () => {
  const rendered = renderer.create(<EmptyList />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('should render the Text element', () => {
  const component = shallow(<EmptyList label="No Data Found" />);
  expect(component).toBeTruthy();
});

let findElement = function (tree, element) {
  console.log(tree);
  let result = undefined;
  let node;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      console.log('Inside for loop   ', tree.children[node].props.testID);
      result = true;
    }
  }
  return result;
};

it('find Text element in EmptyList', () => {
  let tree = renderer.create(<EmptyList />).toJSON();
  expect(findElement(tree, 'textItem')).toBeDefined();
});
