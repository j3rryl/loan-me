import React, { ReactElement } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image';
import gitIcon from '../../icons/github-mark-white.png'
import styles from '../../styles/Form.module.css'
import Link from 'next/link';
const Register = () => {
  return (
    <div className={styles.formcontroller}>
      <h2 className='mt-16 mb-20 font-black text-3xl'>Login Form</h2>
       <form className={styles.formcontrol}>
        <label htmlFor='first_name'>First Name</label><br />
        <input name='first_name' type='text' placeholder='Enter First Name' className={styles.inputcontrol}/><br />
        <label htmlFor='last_name'>Last Name</label><br />
        <input name='last_name' type='text' placeholder='Enter Last Name' className={styles.inputcontrol}/><br />
        <label htmlFor='email'>Email</label><br />
        <input name='email' type='email' placeholder='Enter Email' className={styles.inputcontrol}/><br />
        <label htmlFor='password'>Password</label><br />
        <input name='password' type='password' placeholder='Enter Password' 
        autoComplete='off'
        className={styles.inputcontrol}/><br/>
        <input className={styles.submit}
         type='submit' 
        //  onClick={()=>{
          // signIn('github')
        // }}
         name='register' value='Register' /><br/>
         <Link href='/authentication/login'
         className='!my-12'>Have an account? Login here
         </Link>       
       </form>
       
    </div>
  )
}

export default Register
Register.getLayout = function PageLayout(page: ReactElement){
  return (
      <>
      {page}
      </>
  )
}