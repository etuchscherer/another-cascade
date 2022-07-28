import React from 'react'
import { Container } from 'react-bootstrap'

const ClientService = () => {
  return (
    <Container>
      <h2 className="section-title">Client Services</h2>
      <p className="section-subtitle">
        We make it easy for you. Clients receive a dedicated, single point of contact that handles all telecommunication needs. Installs, upgrades, and cleanouts are scheduled and performed by your dedicated professional.
      </p>
      <div className="section-divider client-service-devider"></div>

      <div className="serv-wrap">
        <div className="single-serv">
          <div className="single-serv-inner">
            <h4 className="single-serv-title">COMPETITIVE PRICING</h4>
          </div>
        </div>
        <div className="single-serv">
          <div className="single-serv-inner">
            <h4 className="single-serv-title">
              RISER MANAGEMENT AT NO COST TO THE PROPERTY MANAGER
            </h4>
          </div>
        </div>
        <div className="single-serv">
          <div className="single-serv-inner">
            <h4 className="single-serv-title">RAPID RESPONSE TIMES</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientService;
