import { calculateLoyaltyPoints } from './utils';
import { formatPriceUSD } from './utils';

test('calculateLoyaltyPoints', () => {
    expect(calculateLoyaltyPoints(101.67)).toBe(52);
});

test('format price using formatPrice', () => {
    expect(formatPriceUSD(123.45)).toBe("$123.45");
});