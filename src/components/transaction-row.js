import styles from './transaction-row.module.css';

export const TransactionRow = ({ data, additionalClass }) => {
    const { id, date, items, amount, points } = data;
    const finalClassName = `${styles.transactionsRow} ${additionalClass}`;

    return (
        <div className={finalClassName}>
            <span>{date}</span>
            <span>{id}</span>
            <span>{items}</span>
            <span>{amount}</span>
            <span>{points}</span>
        </div>
    )
}