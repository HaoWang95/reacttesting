import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button.component';

test('renders learn react link', () => {
  render(<App />);
  // screen.getByText() find element by display text, this i means case insensitive
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // a sample assertion
  expect(linkElement.textContent).toBe("Learn React");

  const customizedContent = screen.getByText(/This is added after the app is created/i);
  expect(customizedContent).toBeInTheDocument();
});

test('Init Button', () => {
  render(<Button buttonText='Init Button' />)
  const initButton = screen.getByRole('button');
  expect(initButton).toHaveTextContent('Init Button');
  expect(initButton).toHaveStyle({
    color: 'blueviolet'
  })
})