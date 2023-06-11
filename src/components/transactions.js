import { useState, useEffect } from 'react';
import { fetchTransactions } from '../service/fetch-transactions';
import styles from './transactions.module.css';
import { TransactionByUser } from './transaction-by-user';

export const Transactions = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions()
            .then((data) => {
                setData(data);
                setError(false);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);


    return (<div>
        {loading && <div className={styles.loader}><h2>Just a minute, we're loading your data.</h2></div>}
        {error && <div className={styles.error}><h2>Something is wrong. {error}</h2></div>}
        {data && <div>
            <h1>Loyalty program points</h1>
            {data.map((item, i) => {
                const { name } = item;
                return <TransactionByUser data={item} key={i + name} />
            })}
        </div>}
    </div>
    )
}