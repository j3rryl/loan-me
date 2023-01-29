import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppLayoutProps, AppProps } from 'next/app'
import { NextComponentType } from 'next'
import Header from '../components/Header'


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
    <Header/>
    <Component {...pageProps}/>
    </>
  )
}
export default App
