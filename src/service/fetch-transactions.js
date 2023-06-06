export const fetchTransactions = () => {
    const data = require('../data/MOCK_DATA.json');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(data);
            } else {
                reject(new Error(`Failed to fetch the data.`));
            }
        }, 3000)

    });
}
