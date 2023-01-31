import React, { ReactElement } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image';
import gitIcon from '../../icons/github-mark-white.png'
import styles from '../../styles/Form.module.css'
import Link from 'next/link';
const LoanForm = () => {
  return (
    <div className={styles.formcontroller}>
      <h2 className='mt-16 mb-20 font-black text-3xl'>Loan Form</h2>
       <form className={styles.formcontrol}>
        <label htmlFor='identification'>National ID/Passport</label><br />
        <input name='identification' type='text' placeholder='Enter Identification Number' className={styles.inputcontrol}/><br />

        <label htmlFor='loan_amount'>Desired Amount</label><br />
        <input name='loan_amount' type='number' placeholder='Enter Amount' className={styles.inputcontrol}/><br />

        <label htmlFor='reason'>What will the loan be used for?</label><br />
        <textarea name='reason' className={styles.inputcontrol} placeholder='State your reasons here'>

        </textarea><br></br>
        <label htmlFor='phone_number'>Phone Number</label><br />
        <input name='phone_number' type='tel' placeholder='Enter Phone Number' 
        autoComplete='off'
        className={styles.inputcontrol}/><br/>
        <input className={styles.submit}
         type='submit' 
        //  onClick={()=>{
          // signIn('github')
        // }}
         name='apply_loan' value='Submit' /><br/>   
       </form>
       
    </div>
  )
}

export default LoanForm
