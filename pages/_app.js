import '../styles/globals.css'

import { CoinMarketProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'

function MyApp({ Component, pageProps }) {
  return (
   
    <GunProvider>
    <CoinMarketProvider>
      <Component {...pageProps} />
    </CoinMarketProvider>
  </GunProvider>
    
  )
}

export default MyApp
