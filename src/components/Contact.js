function Contact() {
    return (
      <div className="container contact">
        <h2 className="main-title text-center">CONTACT</h2>
        <div className="col-md-12">
          <form action="https://formspree.io/f/xbjepeaa" method="POST" >
            <div className="col-md-12 mb-1" style={{display:'flex', justifyContent:'center',}}>
              <input type="email" name="email" className="contact-input" placeholder="Email"/>
            </div>
            <div className="col-md-12" style={{display:'flex', justifyContent:'center',}}>
              <textarea
                name="message"
                placeholder="Message"
                className="contact-textarea"
                
              ></textarea>
            </div>
            <br/>
            <div className="col-md-12" style={{display:'flex', justifyContent:'center',}}>
              <button type="submit" className="form-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  
  