import './transaction.css';

export const Transaction = ({ data }) => {
    const { id, date, items, amount } = data;

    return (
        <div className="transactions-row">
            <span>{date}</span>
            <span>{id}</span>
            <span>{items}</span>
            <span>{amount}</span>
            {/* <span>{sth}</span> */}
        </div>
    )
}