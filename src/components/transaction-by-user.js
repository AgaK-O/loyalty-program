import { useCallback, useState } from "react";
import { calculateLoyaltyPoints } from "../utils/utils";
import { formatPriceUSD } from "../utils/utils";
import { MONTH } from "../utils/utils";
import { TransactionRow } from "./transaction-row";
import { NameCard } from "./name-card";
import styles from './transaction-by-user.module.css';

export const TransactionByUser = ({ data }) => {
    const [isOpen, setOpen] = useState(false);
    const _ = require('lodash');
    const { name, transaction } = data;
    const openTransactions = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);
    const transactionWithPoints = transaction.map(t => {
        return {
            ...t,
            amount: formatPriceUSD(t.price.amount),
            points: calculateLoyaltyPoints(t.price.amount)
        }

    });

    const transactionsByMonth = _.groupBy(transactionWithPoints, ({ date }) => new Date(date).getMonth());
    const rowNames = {
        id: "Id", date: "Date", items: "Items", amount: "Amount", points: "Points"
    }
    let pointsPerMonth = [];
    let totalPoints = 0;
    for (const [key, value] of Object.entries(transactionsByMonth)) {
        let points = 0;
        value.map((x) => points += x.points);
        totalPoints += points;
        pointsPerMonth.push({ month: MONTH[key], points })
    };
    const buttonText = isOpen ? '⇧ Show less' : '⇩ Show more';
    const openTransactionClassName = isOpen ? styles.open : styles.closed;

    return <>
        <NameCard name={name} pointsPerMonth={pointsPerMonth} totalPoints={totalPoints} />
        <div className={openTransactionClassName}>
            <TransactionRow data={rowNames} additionalClass={styles.rowLabels} />
            {transactionWithPoints.map((tr, i) => <TransactionRow data={tr} key={`${i} ${tr.date}`} />)}
        </div>

        <button onClick={openTransactions} className={styles.button}>{buttonText}</button>
    </>

}