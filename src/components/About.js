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
          <div className="col-md-6 text-center ">
            <img alt="about" src={kirchoff} className='abg' />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Who we are</h2>
            <p className="main-p">
Welcome to Awakening Empire Group! We are a socio-corporate institution founded in 2022 by our CEO, Kirchoff Baidoo, and are headquartered in Accra, Ghana, West Africa. We currently have a team of 10 dedicated employees who share our passion for creating a world where everyone can have a sense of purpose and make a positive impact.
At Awakening Empire Group, we serve not only our local community in Ghana but also the larger African and international communities. We are committed to providing career development, leadership, and transformation services to empower individuals and create value for our clients.
Our current ongoing project is the Prescripzone Medical Project, which we launched in 2022. Through this initiative, we aim to improve access to quality healthcare in Ghana and beyond.
At Awakening Empire Group, we believe that our success is closely tied to the success of the communities we serve. As such, we prioritize partnerships with people and environment-focused organizations across the globe to satisfy the Sustainable Development Goals (SDGs) and impact generations positively. Join us today and let's make the world a better place together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
