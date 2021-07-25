export default function ContactForm() {
    return (
      <form className="contact-form-container" name="contact" action="/success" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" hidden />
          <label htmlFor="yourname">Your Name:</label>
          <input className="form-control" type="text" name="name" id="yourname" placeholder="First Name" />
          <br />
          <label htmlFor="youremail">Your Email:</label>
          <input className="form-control" type="email" name="email" id="youremail" placeholder="Email Address" />
          <br />
          <label htmlFor="yourmessage">Message:</label>
          <textarea className="form-control" name="message" id="yourmessage" cols={30} rows={10} placeholder="How can I help you?"></textarea>
          <br />
          <button className="btn btn-dark mt-3" type="submit">Send</button>
      </form>
    )
  }