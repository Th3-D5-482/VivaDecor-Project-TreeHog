import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Newsletter';
import ProcessSection from '../components/ProcessSection';
import Section4 from '../components/Section4';
import ServiceSection from '../components/ServiceSection';
import Testamonials from '../components/Testamonials';

function HomePage () {
    return (
    <>
        <Header/>
        <HeroSection/>
        <ServiceSection/>
        <Section4/>
        <ProcessSection/>
        <Testamonials/>
        <Newsletter/>
        <Footer/>
    </>
    );
}
export default HomePage;