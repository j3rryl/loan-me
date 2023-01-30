import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <h2>Loan Me</h2>
            <ul >
                <li className={styles.link}>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href='loans'>
                        Apply Loan
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href='about'>
                        About
                    </Link>
                </li>
            </ul>
            <ul >
                <li className={styles.link}>
                    <Link href='/'>
                        Sign In
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href='/'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header