import * as React from 'react'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
