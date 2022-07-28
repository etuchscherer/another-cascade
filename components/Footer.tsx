import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import FOOTLOGO from '../public/assets/logo.png'
import { GoLocation } from 'react-icons/go'
import { AiFillPhone } from 'react-icons/ai'
import { FaFax } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="ft-bg">

        <Container>
          <div className="footer-top">
            <div className="single-foot d-flex align-items-center foot-right-border">
              <div className="foot-logo">
                <Image
                  src={FOOTLOGO}
                  alt="Picture of the author"
                  className="foot-logo-img"
                />
              </div>
            </div>
            <div className="single-foot foot-contact foot-right-border">
              <h2 className="foot-title">CONTACT INFO</h2>
              <div className="single-itm">
                <div className="d-flex flex-row">
                  <div className="left-icon">
                    <GoLocation />
                  </div>
                  <p className="foot-info-title">4148 52nd Ave SW Seattle, WA 98116</p>
                </div>
              </div>
              <div className="single-itm">
                <div className="d-flex flex-row">
                  <div className="left-icon">
                    <AiFillPhone />
                  </div>
                  <p className="foot-info-title">Phone:&nbsp;206.396.6864</p>
                </div>
              </div>
              <div className="single-itm">
                <div className="d-flex flex-row">
                  <div className="left-icon">
                    <FaFax />
                  </div>
                  <p className="foot-info-title">Fax:&nbsp;800.537.9459</p>
                </div>
              </div>
              <div className="single-itm">
                <div className="d-flex flex-row">
                  <div className="left-icon">
                    <HiOutlineMail />
                  </div>
                  <p className="foot-info-title">service@cascaderisermanagement.com</p>
                </div>
              </div>
            </div>
            <div className="single-foot">
              <ul className="foot-menu">
                <li>
                  <Link href="/">
                    <a className="footer-menu-link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="footer-menu-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="footer-menu-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="footer-bottom">
          <p className="footer-coptright-text">
            &copy; 2009-{(new Date()).getFullYear()} - Cascade Riser Management | All Right Reserved
          </p>
        </div>
    </div>
  );
};

export default Footer;
