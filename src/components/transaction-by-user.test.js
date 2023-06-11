import { render, fireEvent } from '@testing-library/react';
import { TransactionByUser } from './transaction-by-user';

describe('TransactionByUser', () => {
  const data = {
    someName: 'John Doe',
    transaction: [
      {
        id: 1,
        date: '2023-06-01',
        items: ['Item 1', 'Item 2'],
        price: { currency: 'USD', amount: 50 },
      },
      {
        id: 2,
        date: '2023-06-15',
        items: ['Item 3', 'Item 4'],
        price: { currency: 'USD', amount: 75 },
      },
    ],
  };

  it('toggles the open/close state when the button is clicked', () => {
    const { getByText, queryByText } = render(<TransactionByUser data={data} />);

    fireEvent.click(getByText('⇩ Show more'));
    expect(queryByText('⇧ Show less')).toBeInTheDocument();

    fireEvent.click(getByText('⇧ Show less'));
    expect(queryByText('⇩ Show more')).toBeInTheDocument();
  });
});
