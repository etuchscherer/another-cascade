import * as React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Footer from '../components/Footer';
import Navigation from './Navigation';
import TopBar from './TopBar';

interface Props {
  // TODO - figure out this children type
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper-div">
      <div className="topbar">
        <TopBar />
      </div>
      <Head>
        <title>Cascade Riser Management</title>
        <meta name="description" content="Riser Management and Structured Cabling in the Seattle area. Serving Seattle, Renton, Bellevue, Tacoma and Redmond" />
        <meta name="keywords" lang="en" content="Seattle Cabling, wiring, data, cabling, voice, ds3, t1, dsl, cat5, cat6, video, contractor, fiber, optic, communications, cascade, vantage, cochran, services, structured cabling, cat5e, coax, cable, seattle, bellevue, washington, puget, sound" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
