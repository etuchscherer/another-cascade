import * as React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Footer from '../components/Footer';
import Navigation from './Navigation';
import TopBar from './TopBar';
import Script from 'next/script'

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
        <meta name="description" content="Structured cabling company in the Western Washington area that provides riser management, installs, extensions, cleanouts. Serves Seattle, Renton, Bellevue, Kirkland, Tacoma and Redmond." />
        <meta name="keywords" lang="en" content="Seattle cabling, wiring, data, cabling, voice, ds3, t1, dsl, cat5, cat6, video, contractor, installs, installer fiber, optic, fiber-optic, communications, telecommunications cascade, vantage, cochran, services, structured cabling, cat5e, coax, cable, seattle, bellevue, washington, puget, sound" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <Navigation />
      {children}
      <footer>
        <Footer />
      </footer>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
    </div>
  )
}

export default Layout
