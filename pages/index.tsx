import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import loan1 from '../images/loan1.jpg'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className={`${styles.container} ${styles.container1}`}>
        
        {/* <Cards/> */}
      </div>
      <div className={`${styles.container} ${styles.container2}`}>
        <h2>Hello</h2>

      </div>
      {/* <div className='h-screen'>

</div>
      <div className='h-screen'>

      </div> */}
    </div>
  )
}
