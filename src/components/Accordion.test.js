import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

test('renders accordion items correctly', () => {
  const items = [
    { id: 1, label: 'Item 1', content: 'Content 1' },
    { id: 2, label: 'Item 2', content: 'Content 2' },
    { id: 3, label: 'Item 3', content: 'Content 3' },
  ];
  

  render(<Accordion items={items} />);

  // Check if all item labels are rendered
  const itemLabels = screen.getAllByText(/Item \d/);
  expect(itemLabels.length).toBe(items.length);

  // Check if all item contents are initially hidden
  const itemContents = screen.queryAllByText(/Content \d/);
  expect(itemContents.length).toBe(0);
});

test('expands and collapses accordion items correctly', () => {
  const items = [
    { id: 1, label: 'Item 1', content: 'Content 1' },
    { id: 2, label: 'Item 2', content: 'Content 2' },
    { id: 3, label: 'Item 3', content: 'Content 3' },
  ];

  render(<Accordion items={items} />);

  // Click on the first item to expand it
  fireEvent.click(screen.getByText('Item 1'));
  expect(screen.getByText('Content 1')).toBeInTheDocument();

  // Click on the second item to expand it
  fireEvent.click(screen.getByText('Item 2'));
  expect(screen.getByText('Content 2')).toBeInTheDocument();

  // Click on the second item again to collapse it
  fireEvent.click(screen.getByText('Item 2'));
  expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
});