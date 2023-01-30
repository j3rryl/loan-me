import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppLayoutProps, AppProps } from 'next/app'
import { NextComponentType } from 'next'
import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react'



const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  if(Component.getLayout){
    return (
      Component.getLayout(
        <Component {...pageProps}/>
      )
    )
  }
  return(
    <>
    <SessionProvider>
    <Header/>
    <Component {...pageProps}/>
    </SessionProvider>
    </>
  )
}
export default App
