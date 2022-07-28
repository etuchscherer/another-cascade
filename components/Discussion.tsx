import * as React from 'react'
import { Container } from 'react-bootstrap'

const Discussion = () => {
  return (
    <Container>
      <div className="discussion-wrap">
        <h2 className="section-title text-uppercase">Let&apos;s start the discussion</h2>
        <button className="custom-btn disscuss-btn text-uppercase">Let&apos;s talk</button>
      </div>
    </Container>
  );
};

export default Discussion;
