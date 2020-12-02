import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import WeatherListItem from '../weatherListItem';

it('should load flat list item view without crashing', () => {
  const rendered = renderer.create(<WeatherListItem />).toJSON();
  expect(rendered).toBeTruthy();
});

it('should render the Text element', () => {
  const component = shallow(
    <WeatherListItem item1="Humidity: 69" item2="Temp: 297.53" />,
  );
  expect(component).toMatchSnapshot();
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

it('find First Text element in WeatherListItem', () => {
  let tree = renderer.create(<WeatherListItem />).toJSON();
  expect(findElement(tree, 'textItem1')).toBeDefined();
});

it('find  Second Text element in WeatherListItem', () => {
  let tree = renderer.create(<WeatherListItem />).toJSON();
  expect(findElement(tree, 'textItem2')).toBeDefined();
});
