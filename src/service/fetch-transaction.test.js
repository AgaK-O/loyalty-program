import { fetchTransactions } from './fetch-transactions';
const mockData = require('../data/MOCK_DATA.json');

describe('fetchTransactions', () => {
  it('returns data successfully', async () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3);
    const data = await fetchTransactions();
    expect(data).toEqual(mockData);
    Math.random.mockRestore();
  });

  it('throws an error when failed to fetch data', async () => {
    const expectedError = new Error('Failed to fetch the data.');
    jest.spyOn(Math, 'random').mockReturnValue(0.0);
    await expect(fetchTransactions()).rejects.toThrow(expectedError);
    Math.random.mockRestore();
  });
});