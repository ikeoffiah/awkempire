import kirchoff from '../assets/kirchoff.jpg'


function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={kirchoff} style={{ height:'500px', width:'500px',marginRight:'40px'}} />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Who we are</h2>
            <p className="main-p">
              Awakening Empire Group is a leading socio-corporate institution
              committed to creating a world where everyone can have a sense of
              purpose, leaving a legacy of practical benefits, and making the
              world a better place through value creation in career development,
              leadership, and transformation services. We aim to provide
              employment avenues, promote a multi-culture environment for people
              to thrive, and partner with people and environment-focused
              organizations across the globe to satisfy the Sustainable
              Development Goals (SDGs) and impact generations positively.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
