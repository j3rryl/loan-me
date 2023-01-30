import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'
import { signIn,signOut, useSession } from 'next-auth/react'

const Header = () => {
    const {data:session, status} = useSession()
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
                {!session &&(
                <li className={styles.link}>
                    <Link href='/api/auth/signin' 
                    onClick={(e) => {
                    e.preventDefault()
                        signIn()
                        }
                    }
                    >
                    Sign In
                    </Link>
                </li>
                )}
                {session && (
                <li className={styles.link}>
                    <Link href='/api/auth/signout' 
                        onClick={(e) => {
                        e.preventDefault()
                        signOut()
                      }}
                      >
                        Sign Out
                    </Link>
                </li>
                )}
                 <li className={styles.link}>
                    <Link href='contact' >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header