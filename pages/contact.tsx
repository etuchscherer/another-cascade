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
        <div className="contact-wrap">
          <div className="contact-right contact-form-wrap">
            <form action="https://formspree.io/f/mzbonnlp" method='POST' className='needs-validation'>
              <h2 className="text-uppercase mt-3">
                Send a message
              </h2>

              <div className="mb-3">
                <label htmlFor="contactFormName" className="form-label">Name&nbsp;:</label>
                <input type="text" id="contactFormName" className="form-control form-control-lg" placeholder='who are you ?' name='name' required />
              </div>
              <div className="mb-3">
                <label htmlFor="contactFormEmail" className="form-label">Email&nbsp;:</label>
                <input type="email" id="contactFormEmail" className="form-control form-control-lg" placeholder='someone@example.com' name='email' required />
              </div>
              <div className="mb-3">
                <label htmlFor="contactFormPhoneNumber" className="form-label">Phone&nbsp;:</label>
                <input type="tel" id="contactFormPhoneNumber" className="form-control form-control-lg" placeholder='555-123-4567' name='phone' required />
              </div>
              <div className="mb-3">
                <label htmlFor="contactFormMessage" className="form-label">Message&nbsp;:</label>
                <textarea id="contactFormMessage" rows={10} className="form-control form-control-lg" placeholder='How can we help ?' name='message' required></textarea>
              </div>

              <div className="d-grid gap-1">
                <button type="submit" className="btn submit-btn mb-3" style={{ backgroundColor: '#0075b1', color: 'white'}}>
                  Send Message <HiOutlineMail />
                </button>
                <a href="tel:2068184599" className="btn w-100 text-uppercase text-center call-btn" style={{ backgroundColor: 'green', color: 'white' }}>
                  Call <AiFillPhone />
                </a>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default contact;
