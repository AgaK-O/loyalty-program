import styles from './name-card.module.css';

export const NameCard = ({ name, pointsPerMonth, totalPoints }) => {
    return <div className={styles.nameCard}>
        <h2>{name}</h2>
        <div>{pointsPerMonth.map((p, i) => {
            return <p className={styles.row} key={i + p.month}><span>{p.month}: </span><span>{p.points}</span></p>
        })}
            <p className={styles.row}><span className={styles.total}>Total points:</span> <span className={styles.total}>{totalPoints}</span></p>
        </div>
    </div>
}