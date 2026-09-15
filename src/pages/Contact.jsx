export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const projectType = formData.get('projectType')?.trim();
    const message = formData.get('message')?.trim();

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      projectType && `Project type: ${projectType}`,
      '',
      message
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:studio@joysimes.com?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section contact-page">
      <div className="contact-layout">
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h1>Start a conversation.</h1>
          <p>For residential projects, interiors, commercial spaces and selected collaborations. Share the location, timeline and what you would like the space to make possible.</p>
          <div className="contact-direct">
            <span>DIRECT</span>
            <a href="mailto:studio@joysimes.com">studio@joysimes.com</a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Project type<input name="projectType" /></label>
          <label>Message<textarea name="message" rows="6" required /></label>
          <button className="text-button" type="submit">Send enquiry ↗</button>
        </form>
      </div>
    </section>
  );
}
