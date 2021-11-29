import React, { ChangeEvent } from 'react';
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
  const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

  // Click checkbox
  fireEvent.click(labelElement);
  expect(checkboxElement).toBeChecked();

  // Click checkbox again, unchecking it
  fireEvent.click(labelElement);
  expect(checkboxElement).not.toBeChecked();

  expect(labelElement).toBeInTheDocument();
});

test('the default checked value is false', () => {
  render(<Checkbox label="test label" />);

  const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

  expect(checkboxElement.checked).toBe(false);
});

test('the initial checked value is set', () => {
  render(<Checkbox label="test label" checked={true} />);

  const checkboxElement = screen.getByRole('checkbox') as HTMLInputElement;

  expect(checkboxElement.checked).toBe(true);
});

test('onChange is called', () => {
  let called:boolean = false;

  const onChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    called = true;
  }

  render(<Checkbox label="test label" onChange={onChange} />);
})
