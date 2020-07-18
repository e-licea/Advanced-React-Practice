import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import { render } from '@testing-library.react'
import '@testing-library/jest-dom/extend-expect'


//Arrage 
//Act
//Assert

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Nav title renders properly',() => {

  const {getByText} = render(<App/>)
  const Title = getByText(/Men's Soccer Players - World Ranking/i)
  expect(Title).toBeInTheDocument();

})