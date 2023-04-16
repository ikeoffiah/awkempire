import Card from "./Card";
import health from "../assets/health.jpg";
import leadership from "../assets/leadership.jpg";
import study from "../assets/study.jpg";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="HealthCare"
                img={health}
                text="PRESCRIPZONE is a health resource app for checking health, accessing health tips, newsletters, and talking to medical personnel"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Leadership"
                img={leadership}
                text="The ElevateNow Leadership Program empowers aspiring leaders to develop the skills, mindset, and strategies necessary to make a positive impact in their organizations and communities"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Education"
                img={study}
                text="SKILLMAX is the ultimate education app to unlock your potential and gain new skills anytime, anywhere"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
