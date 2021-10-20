import { appWithTranslation } from 'next-i18next'
import { polyfill } from 'interweave-ssr'
import '@/styles/globals.scss'

polyfill()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
