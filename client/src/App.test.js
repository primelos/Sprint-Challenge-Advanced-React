import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders app without crashing', () =>{
  rtl.render(<App />)
})

test ('render correctly', () => {
   const {getByText} = (/morgan/i)
})


test ('render correctly', () => {
  const {getByText} = (/this/i)
})

test ('render correctly', () => {
  const {getByTitle} = ('Jom')
})
test('change color', () => {
 const {getByTestId} = ('change-color')
})