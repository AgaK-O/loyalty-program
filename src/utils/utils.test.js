import calculateLoyaltyPoints from './utils';

// test('Calculate points using the calculateLoyaltyPoints method', () => {
//     expect(calculateLoyaltyPoints("1,007.56 €")).toBe(1864)
// });

describe('calculateLoyaltyPoints', () => {
    test.each([
        ["1,007.56 €", 1864],
        ["$14,407.06", 28664],
        ["$101.67", 52],
    ])('given amount %p , it should return %p ', (input, expected) => {
        expect(calculateLoyaltyPoints(input)).toEqual(expected);
    });
});