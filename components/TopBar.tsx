import React from 'react'
import { Container } from 'react-bootstrap'

const TopBar = () => {
  return (
    <Container>
      <div style={{display:"flex", alignItems:"center"}}>
          <a
            className="topbar-link"
            href="mailto:service@cascaderisermanagement.com"
          >
            Email: service@cascaderisermanagement.com
          </a>
      </div>
    </Container>
  );
};

export default TopBar;
