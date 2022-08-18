import { Container } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'

const contact = () => {
  const backgroundImage = './assets/contact-bg.jpg';

  const styling = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundBlendMode:'darken, luminosity',
    width: '100%',
    height: '44vh'
  };
  return (
    <div className="contact">
      <div className="d-flex justify-content-center align-items-center" style={styling}>
        <h2 className="about-header-title">Contact Us</h2>
      </div>

      <Container>
        <div className="contact-wrap my-3">
          <div className="contact-right contact-form-wrap">
            <h2 className="text-uppercase mt-3">
              Send a message
            </h2>

            <p className="d-md-none m-2 mb-0">
              phone: 206.396.6864
            </p>
            <p className="d-md-none m-2 mt-0">
              email: service@cascaderisermanagement
            </p>

            <div className="d-flex bd-highlight">
              <a href='tel:2063966864' className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'green', color: 'white', flex: "1 1 0", overflow: 'hidden', height: '33vh' }}>
                <h2 className='d-flex align-items-center'>Call <AiFillPhone className='mx-2' /></h2>
                <p className='d-none d-md-block'>206.396.6864</p>
              </a>
              <div className="d-flex align-items-center px-2 text-uppercase fw-bold">OR</div>
              <a href='mailto:service@cascaderisermanagement.com?subject=question from cascaderisermanagement.com' className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0075b1', color: 'white', flex: "1 1 0", overflow: 'hidden', height: '33vh' }}>
                <h2 className='d-flex align-items-center'>Write <HiOutlineMail className='mx-2'/></h2>
                <p className='d-none d-md-block'>service@cascaderisermanagement.com</p>
              </a>
            </div>

            {/* <div className="d-grid gap-1">
              <button type="submit" className="btn submit-btn mb-3" style={{ backgroundColor: '#0075b1', color: 'white'}}>
                Send Message <HiOutlineMail />
              </button>
              <a href="tel:2063966864" className="btn w-100 text-uppercase text-center call-btn" style={{ backgroundColor: 'green', color: 'white' }}>
                Call <AiFillPhone />
              </a>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default contact;
