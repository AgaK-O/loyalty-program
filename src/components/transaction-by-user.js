import { calculateLoyaltyPoints } from "../utils/utils";
import { Transaction } from "./transaction"

export const TransactionByUser = ({ data }) => {
    const _ = require('lodash');
    const { name, transaction } = data;

    const transactionsByMonth = _.groupBy(transaction, ({ date }) => new Date(date).getMonth());
    const rowNames = {
        id: "id", date: "date", items: "items", amount: "amount"
    }

    // console.log({ transactionsByMonth })
    // console.log({ data })
    console.log(transaction[0].amount)
console.log(calculateLoyaltyPoints(transaction[0].amount))

    return <div>
        <p>{name}</p>
        <Transaction data={rowNames} />
        {transaction.map((tr, i) => {
            return <Transaction data={tr} key={`${i} ${tr.date}`} />
        })}
    </div>

}