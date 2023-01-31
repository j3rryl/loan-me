import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import loan1 from '../images/loan1.jpg'
import Cards from '../components/Cards'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data: session, status} = useSession()
  return (
    <div className='w-full h-full'>
      <div className={`${styles.container} ${styles.container1}`}>
        
        {/* <Cards/> */}
      </div>
      <div className={`${styles.container} ${styles.container2}`}>
        <h2>Signed in as {session?.user?.name}</h2>

      </div>
      {/* <div className='h-screen'>

</div>
      <div className='h-screen'>

      </div> */}
    </div>
  )
}
