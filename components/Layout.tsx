import * as React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

interface Props {
  // TODO - figure out this children type
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cascade Riser Management</title>
        <meta name="description" content="Riser Management and Structured Cabling in the Seattle area. Serving Seattle, Renton, Bellevue, Tacoma and Redmond" />
        <meta name="keywords" lang="en" content="Seattle Cabling, wiring, data, cabling, voice, ds3, t1, dsl, cat5, cat6, video, contractor, fiber, optic, communications, cascade, vantage, cochran, services, structured cabling, cat5e, coax, cable, seattle, bellevue, washington, puget, sound" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
