import { render } from '@testing-library/react';
import { NameCard } from './name-card.js';


test('renders NameCard component with props', () => {
    const someName = 'John Doe';
    const points = [
        { month: 'January', points: 80 },
        { month: 'February', points: 90 },
        { month: 'March', points: 75 },
    ];
    const totalPoints = 245;

    const { getByText } = render(<NameCard name={someName} pointsPerMonth={points} totalPoints={totalPoints} />);
    expect(getByText(someName)).toBeInTheDocument();
    
    points.forEach((point) => {
        expect(getByText(`${point.month}:`)).toBeInTheDocument();
        expect(getByText(point.points.toString())).toBeInTheDocument();
    });

    expect(getByText('Total points:')).toBeInTheDocument();
    expect(getByText(totalPoints.toString())).toBeInTheDocument();

});
