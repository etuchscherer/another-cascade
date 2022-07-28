import { NextPage } from 'next'
import Image from 'next/image'
import ABOUT1 from '../public/assets/about1.jpg'
import ABOUT2 from '../public/assets/about2.jpg'
import * as React from 'react'
import { Container } from 'react-bootstrap'

const About: NextPage = () => {
  const backgroundImage = "./assets/about-bg.jpg";

  const styling = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: "relative",
    zIndex: -999,
    backgroundColor: "rgba(0,0,0,0.6)",
    backgroundBlendMode: "darken, luminosity",
    width: "100%",
  };
  return (
    <div className="about">
      <div className="about-header" style={styling} data-aos="fade-up">
        {/* <div className="about-header-overlay"></div> */}
        <h2 className="about-header-title">About Us</h2>
      </div>

      <div className="about-bg about-bg-blue">
        <Container>
          <div className="about-home-wrap ">
            <div className="right-about-home about-pd" data-aos="fade-up">
              <h2 className="about-home-title">ABOUT US</h2>
              <div className="section-divider about-home-divider" />
              <p className="about-home-desc">
                Based out of Seattle, we have served the western Washington area for over 10 years.&nbsp;
              </p>

              <p className="about-home-desc">
                While riser management is our main focus, we also offer installs, and cleanouts. We proudly
                claim the title, &apos;preferred vendor&apos; for over 25 prominent properties, including <a href='https://www.999thirdave.com/'>999 3rd Avenue</a>, <a href='https://www.800fifthavenue.com/'>800 5th Avenue</a>, and the <a href="https://www.usbcseattle.com/">U.S. Bank Center</a>&nbsp;
              </p>

              <p className="about-home-desc">
                As an owner-operated small business, we walk the extra mile to ensure top-notch craftsmanship, attention to detail, and customer satisfaction. We maintain clean, code-compliant riser closets, professional installs, and timely clean-outs.&nbsp;
              </p>

              <p className="about-home-desc">
                We are licensed, bonded, and insured. If we sound like someone you would want to do business with, please contact us.
              </p>
            </div>
            <div className="left-about-home">
              <div className="about-home-img" data-aos="fade-up" >
                <Image
                  src={ABOUT1}
                  alt="Orange USB Cable"
                  className="foot-logo-img"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="discussion">
        {/* <Discussion></Discussion> */}
      </section>
    </div>
  )
}

export default About;