import React from 'react';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

test('renders list item with correct name', () => {
    const item = { id: 1, name: 'Test Item' };
    const { getByText } = render(<ListItem item={item} />);
    const listItemElement = getByText(/Test Item/i);
    expect(listItemElement).toBeInTheDocument();
});