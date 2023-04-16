import Vid from '../assets/testVid.mp4'


function Header() {
  return (
    <header>
      <video src={Vid} loop autoPlay muted></video>
      <h2 style={{color:'white'}}>Inspiring Generations, Creating Opportunities, and Building a Sustainable Future Together</h2>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
