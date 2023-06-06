// import { Transaction } from "./transaction"

export const TransactionByUser = (data) => {
    const _ = require('lodash');
    const { transactions } = data;
    const transactionsByMonth = _.groupBy(transactions, ({ date }) => new Date(date).getMonth());
    console.log({transactionsByMonth})
    console.log({data})

    return <div>
            here
    </div>
}