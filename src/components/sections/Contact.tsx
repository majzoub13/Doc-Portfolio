// Section contact: ported 1:1 from the approved design (design-source/Main.dc.html).
import { Button, ChapterLabel, EmailLink, LinkList, Reveal } from '../doc';
import { EMAIL, MAILTO, contactLinks } from '../../content/site';

export function Contact() {
  return (
    <section className="scene scene--ink contact" data-theme="ink" id="contact" aria-labelledby="contact-title">
      <div className="dots" aria-hidden="true" />
      <div className="contact-burst-wrap par-slow" aria-hidden="true">
        <Reveal className="fx-burst">
          <svg className="contact-burst" viewBox="0 0 600 620">
            <polygon points="300,-9 333,114 395,39 400,126 493,70 450,174 590,132 466,239 555,255 479,300 610,355 464,360 536,436 462,436 501,540 393,462 414,613 331,478 300,614 270,471 199,576 197,479 85,556 139,435 49,445 117,366 20,349 129,300 5,248 105,229 15,135 146,171 83,41 211,146 207,44 267,115" />
          </svg>
        </Reveal>
      </div>
      <div className="wrap g12 contact__grid">
        <div className="contact__main">
          <Reveal className="fx-head fx-close">
            <svg className="hburst" viewBox="-20 -40 420 400" aria-hidden="true">
              <polygon points="200,-27 233,46 305,-13 289,81 353,82 315,139 375,170 302,197 363,264 289,259 288,322 229,280 200,353 167,291 105,335 113,257 25,271 87,200 -3,170 73,136 52,84 106,76 100,-3 172,64" />
            </svg>
            <ChapterLabel number={7} title="Contact" />
            <h2 className="contact__title" id="contact-title">
              Let's build something meaningful.
            </h2>
            <p className="contact__copy">
              I'm interested in ambitious technical challenges, thoughtful collaborations, and opportunities at the intersection of AI, software, and product
              development. Whether you're building a product, exploring an idea, or looking for someone who thinks beyond the code, I'd be glad to connect.
            </p>
            <div className="contact__email">
              <EmailLink address={EMAIL} copy />
            </div>
            <div className="actions">
              <Button variant="primary" href={MAILTO} icon="mail">
                Send an email
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="contact__side">
          <Reveal className="fx-right" index={2}>
            <div className="cut cut--yellow">
              <div className="cut__in clip-tr" data-theme="paper">
                <h3 className="fp-h">Direct lines</h3>
                <LinkList items={contactLinks} />
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal as="p" className="fin narr fx-pop">
          To be continued…
        </Reveal>
      </div>
    </section>
  );
}
