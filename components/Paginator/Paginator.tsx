import React from 'react'
import styles from './Paginator.module.css'

const Paginator = ({ totalPages, setPage }: { totalPages: number, setPage: React.Dispatch<React.SetStateAction<number>> }) => {

    let pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers = [...pageNumbers, i]
    }

    return (
        <div className={styles.container}>
            {pageNumbers.map((number) => (
                <p className={styles.link} onClick={() => setPage(number)} key={number}>{number}</p>
            ))}
        </div>
    )
}

export default Paginator