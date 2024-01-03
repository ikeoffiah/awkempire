import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Team from './Team';
import MisVis from './MisVis';
import Mis from './Mis';
import Mockup from './prescripzonesec';


function Main() {
  
  return (
    <>
      <main>
        <Services />
        <Mockup/>
        <About />
        <MisVis/>
        <Mis/>
        <Team/>
        <Contact/>
      </main>
    </>
  );
}
export default Main;
