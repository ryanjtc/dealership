import './App.css';
import Header from './components/Header/Header';
//import PromoBanner from './components/PromoBanner/PromoBanner';
import Hero from './components/Hero/Hero';
import CTA from './components/CTA/CTA';
import Featured from './components/Featured/Featured';
import Careers from './components/Careers/Careers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CTA/>
      <Featured/>
      <Careers/>
      <Footer/>
    </div>
  );
}

export default App;
