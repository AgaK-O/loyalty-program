import { render } from '@testing-library/react';
import { TransactionRow } from './transaction-row';


test('renders TransactionRow component with props', () => {
    const data = {
        id: 1,
        date: "3/24/2023",
        items: 3,
        amount: "$123",
        points: 120
    };
    const a = "a";

    const { getByText } = render(<TransactionRow data={data} additionalClass={a} />);
    expect(getByText(data.id)).toBeInTheDocument();
    expect(getByText(data.date)).toBeInTheDocument();
    expect(getByText(data.items)).toBeInTheDocument();
    expect(getByText(data.amount)).toBeInTheDocument();
    expect(getByText(data.points)).toBeInTheDocument();
});