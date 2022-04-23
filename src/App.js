
import './App.css';
import Card from './components/Card';
import Clients from './components/Clients';
import ClientTestimonial from './components/ClientTestimonial';
import Countries from './components/Countries';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import HaveQuestion from './components/HaveQuestion';
import Header from './components/Header';
import IndustryTrend from './components/IndustryTrend';
import MapSection from './components/MapSection';
import OurGlobal from './components/OurGlobal';
import OurLatest from './components/OurLatest';
import OurPromise from './components/OurPromise';
import OurValue from './components/OurValue';
import OurVision from './components/OurVision';
import ReadOur from './components/ReadOur';

function App() {
  return (
    <>
    <Header/>
    <Card/>
    <OurVision/>
    <OurPromise/>
    <OurValue/>
    <Clients/>
    <IndustryTrend/>
    <OurLatest/>
    <ClientTestimonial/>
    <ReadOur/>
    <OurGlobal/>
    <MapSection/>
    <Countries/>
    <FormSection/>
    {/* <HaveQuestion/> */}
    <Footer/>
   
    </>
  );
}

export default App;
