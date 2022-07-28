import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import CARD1 from '../public/assets/card-1.jpg'
import CARD2 from '../public/assets/card2.jpg'
import CARD3 from '../public/assets/card3.jpg'
import CARD4 from '../public/assets/card4.jpg'
import CARD5 from '../public/assets/card5.jpg'
import CARD6 from '../public/assets/card5.jpg'

const Services = () => {
  return (
    <Container>
      <div className="section-top">

          <h2 className="section-title">SERVICES OFFERED</h2>
          <p className="section-subtitle">
            GIVE YOUR BUSINESS A STRONGER BACKBONE
          </p>

        <div className="section-divider" data-aos="fade-up"></div>
      </div>

      <div className="services">
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD1}
                alt="Picture of the author"
                className="card-img"
                layout='intrinsic'
                  // width={'100%'}
                  // height={22}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">STRUCTURED CABLING</h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">PHONES, DATA AND FIBER</h5>
              <p className="card-desc">
                We can help you move into a new space or expand on your current
                space. Cascade Riser Management has the tools and the knowledge
                to get your suite up and running!
              </p>
            </div>

        </div>
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD2}
                alt="Picture of the author"
                className="card-img"
                layout='intrinsic'
                //   width={176}
                // height={280}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                FIBER OPTIC INSTALLATION/TERMINATION
              </h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">ARMORED FIBER ?</h5>
              <p className="card-desc">
                A huge benifet of going with Cascade Riser Management would be
                the usage of armored fiber optic cable. It gets installed in
                half the time, and it’s twice as strong. This saves you time,
                and headaches.
              </p>
            </div>

        </div>
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD3}
                alt="Picture of the author"
                className="card-img"
                //   width={176}
                //   height={42}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">TESTING/TROUBLESHOOTING</h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">OUR TECHNICIANS</h5>
              <p className="card-desc">
                Our technicians have years of experience. They’re professional,
                punctual and courteous. All extended services shall be tagged
                and tested upon completion.
              </p>
            </div>

        </div>
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD4}
                alt="Picture of the author"
                className="card-img"
                //   width={176}
                //   height={42}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">COAXIAL CABLE</h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">COAXIAL CABLE</h5>
              <p className="card-desc">
                Our technicians also install coaxial cable for your tv, internet
                and phone needs
              </p>
            </div>

        </div>
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD5}
                alt="Picture of the author"
                className="card-img"
                //   width={176}
                //   height={42}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">CABLE REMOVAL</h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">CABLE REMOVAL</h5>
              <p className="card-desc">
                Moving out of your leased office space can be a hassle. As per
                most lease agreements it’s the tenants responsibility to remove
                all of the cabling that has been installed during occupation.
                Cascade Riser Management can perform this service in a
                profession and timely manner.
              </p>
            </div>

        </div>
        <div className="service-card" data-aos="fade-up">

            <div className="card-top-img">
              <Image
                // loader={myLoader}
                src={CARD6}
                alt="Picture of the author"
                className="card-img"
                //   width={176}
                //   height={42}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">CIRCUIT EXTENSION</h3>
              <div className="section-divider"></div>
              <h5 className="card-subtitle">CIRCUIT EXTENSION</h5>
              <p className="card-desc">
                Our technicians have years of experience extending any type of
                circuit that is needed, whether it is fiber, coax or copper
                lines.
              </p>
            </div>

        </div>
      </div>
    </Container>
  );
};

export default Services;
