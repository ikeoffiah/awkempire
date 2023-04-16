import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Team from './Team';
import MisVis from './MisVis';
import Mis from './Mis';

function Main() {
  return (
    <>
      <main>
        <Services />
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
