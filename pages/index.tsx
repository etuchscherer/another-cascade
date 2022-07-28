import type { NextPage } from 'next'
import Discussion from '../components/Discussion'
import HeroSection from '../components/HeroSection'
import Services from "../components/Services"
import ClientService from "../components/ClientService"

const Home: NextPage = () => {
  const backgroundImage = "./assets/cover-scaled.jpg";

  const styling = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: "cover",
    backgroundColor: "#cccccc",
    height: "88vh",
    display: "flex",
  };

  return (
    <div>
      <main>
        <section className="hero-section-wrap" style={styling}>
          <div className="hero-overlay" />
          <HeroSection />
        </section>

        <section className="services-section-wrap">
          <Services />
        </section>

        <section className="client-service-section">
          <ClientService />
        </section>

        {/* <section className="discussion">
          <Discussion />
        </section> */}

      </main>
    </div>
  )
}

export default Home
