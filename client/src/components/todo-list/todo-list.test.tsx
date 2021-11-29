import React from 'react';
import { render, screen, within } from '@testing-library/react';
import TodoList from './todo-list.component';
import Todo from '../../types/todo.type';

test('renders todo list', () => {
  const todoList: Todo[] = [
    {
        id: 1,
        todo: 'Wake up at 6am',
        completed: false,
    },
    {
        id: 2,
        todo: 'Eat a healthy breakfast',
        completed: false,
    },
  ];

  render(<TodoList todoList={todoList} />)
  const listElement = screen.getByRole('list')
  const listItems = within(listElement).getAllByRole('listitem');

  expect(listItems.length).toBe(2)
});