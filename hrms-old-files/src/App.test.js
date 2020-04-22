import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders app component', () => {
  const { getByText } = renderer.create(<App />);
});
