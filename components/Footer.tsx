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
            <div className="single-foot">
              <div className="foot-logo">
                <Image
                  // loader={myLoader}
                  src={FOOTLOGO}
                  alt="Picture of the author"
                  className="foot-logo-img"
                  //   width={176}
                  //   height={42}
                />
              </div>
              <p className="foot-desc">
                The name Cascade refers to the local mountain range. The
                Cascades. And the pacific northwest ( the area where we operate
                is famous for huge evergreen trees ). Riser Management refers to
                the type of business ( managing telecom riser closets in
                high-rise buildings ).
              </p>
            </div>
            <div className="single-foot foot-contact">
              <h2 className="foot-title">CONTACT INFO</h2>
              <div className="single-itm">
                <div className="left-icon">
                  <GoLocation className="" />
                </div>
                <div className="right-info">
                  <h6 className="foot-info-title">Office Address:</h6>
                  <p className="foot-info-desc">
                    4148 52nd Ave SW Seattle, WA 98116
                  </p>
                </div>
              </div>
              <div className="single-itm">
                <div className="left-icon">
                  <AiFillPhone className="" />
                </div>
                <div className="right-info">
                  <h6 className="foot-info-title">Customer Service:</h6>
                  <p className="foot-info-desc">206.396.6864</p>
                </div>
              </div>
              <div className="single-itm">
                <div className="left-icon">
                  <FaFax />
                </div>
                <div className="right-info">
                  <h6 className="foot-info-title">Fax:</h6>
                  <p className="foot-info-desc">800.537.9459</p>
                </div>
              </div>
              <div className="single-itm">
                <div className="left-icon">
                  <HiOutlineMail />
                </div>
                <div className="right-info">
                  <h6 className="foot-info-title">Email:</h6>
                  <p className="foot-info-desc">
                    service@cascaderisermanagement.com
                  </p>
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
