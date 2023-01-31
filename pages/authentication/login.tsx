import { getProviders, signIn } from 'next-auth/react'
import React, { ReactElement } from 'react'
import styles from '../../styles/Form.module.css'
const Login = ({providers}:any) => {
  const ProvidersButtons = ({ providers }: any) => (
    <div className='flex justify-evenly'>
      {Object.values(providers).map(
        (provider: any) =>
          provider.name !== "Credentials" && (
            <button className={styles.authbuttons}
              key={provider.name}
              onClick={()=>{
                signIn(provider.id,{
                  callbackUrl:`http://localhost:3000/`
                })
              }}
              >
                Sign in with {provider.name}
            </button>
          )
      )}
    </div>
  );
  return (
    <div className={styles.formcontroller}>
      <h2 className='mt-16 mb-20'>Login Form</h2>
       <form className={styles.formcontrol}>
        <label htmlFor='email'>Email</label><br />
        <input name='email' type='email' placeholder='Enter Email' className={styles.inputcontrol}/><br />
        <label htmlFor='password'>Password</label><br />
        <input name='password' type='password' placeholder='Enter Password' 
        autoComplete='off'
        className={styles.inputcontrol}/><br/>
        <input className={styles.submit}
         type='submit' 
         
         name='login' value='Login' />
         <ProvidersButtons providers={providers}/>
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