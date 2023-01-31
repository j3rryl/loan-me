import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image';
import gitIcon from '../../icons/github-mark-white.png'
import React, { ReactElement } from 'react'
import styles from '../../styles/Form.module.css'
import Link from 'next/link';
const Login = ({providers}:any) => {
  const ProvidersButtons = ({ providers }: any) => (
    <div className='flex justify-evenly'>
      {Object.values(providers).map(
        (provider: any) =>
          provider.name !== "Credentials" && (
            <button className={`${provider.name=="Google"?"!bg-white !text-black":""} ${styles.authbuttons} flex justify-center`}
              key={provider.name}
              onClick={()=>{
                signIn(provider.id,{
                  callbackUrl:`http://localhost:3000/`
                })
              }}
              >
                {provider.name=="Google"?
                <img className={styles.google} src="https://developers.google.com/identity/images/g-logo.png" height='30' width='30'/>:
                <Image placeholder='blur' src={gitIcon} className={styles.github} alt='git-icon' height='30' width='30'/>
              }
                Sign in with {provider.name}
            </button>
          )
      )}
    </div>
  );
  return (
    <div className={styles.formcontroller}>
      <h2 className='mt-16 mb-20 font-black text-3xl'>Login Form</h2>
       <form className={styles.formcontrol}>
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
         name='login' value='Login' /><br/>
         <Link href='/authentication/register'
         className='!my-12'>Don't have an account? Register here
         </Link>
         <div className='my-4 mx-2 flex justify-between text-center '> 
         <hr className= {`${styles.line} `}/>
         <p>OR</p>
         <hr className={`${styles.line} `}/>
         </div>
         
         <ProvidersButtons providers={providers} />
         
       </form>
       
    </div>
  )
}

export default Login
Login.getLayout = function PageLayout(page: ReactElement){
    return (
        <>
        {page}
        </>
    )
}

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}