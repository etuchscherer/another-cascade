import Link from 'next/link';
import * as React from 'react'
import { Container } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <Container className='d-flex align-items-center'>
      <div className="hero-content">
        <h2 className="hero-title">CASCADE RISER MANAGEMENT</h2>
        <p className="hero-desc">
          We specialize in riser management and cabling in Seattle&apos;s downtown,
          commercial real estate. Since we do not outsource or subcontract our
          services, clients maintain a clean, code-complient, safe, and secure
          telecommunication infrastructure.
        </p>
        <Link href={'contact'}>
          <a className='get-in-touch-btn custom-btn'>Get In Touch</a>
        </Link>
      </div>
    </Container>
  );
};

export default HeroSection;
