import { useState, useEffect } from 'react';
import { Transaction } from './transaction';
import { fetchTransactions } from '../service/fetch-transactions';
import './transactions.css';
import { TransactionByUser } from './transaction-by-user';

export const Transactions = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions()
            .then((data) => {
                console.log(data);
                setData(data);
                setError(false);
            })
            .catch((err) => {
                console.log("err")
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);


    return (<div>
        {loading && <div className="container loader"><h2>Just a minute, we're loading your data.</h2></div>}
        {error && <div className="container error"><h2>Something is wrong. {error}</h2></div>}
        {data && <div>
            {data.map((item, i) => {
                const { transaction, name } = item;
                return <TransactionByUser data={item} key={i + name} />
                // return <div key={i + name}>
                //     <p>{name}</p>
                //     <Transaction data={rowNames} />
                //     {transaction.map((tr, i) => {
                //         return <Transaction data={tr} key={`${i} ${tr.date}`} />
                //         // return <TransactionByUser data={tr} key={`${i} ${tr.date}`} />
                //     })}

                // </div>
            })}
        </div>}
    </div>
    )
}