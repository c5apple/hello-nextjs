import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  console.log('Component', Component);
  console.log('pageProps', pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
