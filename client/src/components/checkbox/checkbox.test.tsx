import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox from './checkbox.component';

test('renders label', () => {
  render(<Checkbox label="test label" />);
  const labelElement = screen.getByText('test label');

  expect(labelElement).toBeInTheDocument();
});

test('changes check status on click', () => {
  render(<Checkbox label="test label" />);

  const labelElement = screen.getByText('test label');
  const checkboxElement = labelElement.querySelector('input');

  // Click checkbox
  fireEvent.click(labelElement);
  expect(checkboxElement).toBeChecked();

  // Click checkbox again, unchecking it
  fireEvent.click(labelElement);
  expect(checkboxElement).not.toBeChecked();

  expect(labelElement).toBeInTheDocument();
});