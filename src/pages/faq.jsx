import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
          "title": "What services does Technovita Solution offer?",
          "text": "Technovita Solution offers a comprehensive range of services designed to drive awareness, engagement, and conversions for e-commerce portals. Our services include Catalogue Creation, Account Management, Sales Boost Services, Content Writing, Branding, Website Designing and Development, SEO, SMM, SEM, ORM, and SMO. We also provide original website content writing, blog writing, and strategic marketing solutions across various industry verticals."
      },
      {
          "title": "How can Technovita Solution help boost my e-commerce sales?",
          "text": "At Technovita Solution, we employ a combination of digital marketing strategies, including SEO, SMM, SEM, and targeted content creation to drive traffic and increase conversions for your e-commerce portal. Our Sales Boost Services are tailored to enhance your online presence, attract potential customers, and improve overall sales performance through data-driven marketing and continuous optimization."
      },
      {
          "title": "What makes Technovita Solution different from other digital marketing agencies?",
          "text": "Technovita Solution stands out due to our integrated approach and specialized teams in Catalogue Creation, Account Management, and Digital Marketing. We focus on delivering quality results through continuous improvement and a deep understanding of contemporary culture and customer needs. Our mission is to enrich your business with relevant strategies and provide a compelling value experience that transforms your business seamlessly."
      },
      {
          "title": "How does Technovita Solution ensure quality in its services?",
          "text": "Quality consciousness is one of our core values at Technovita Solution. We ensure quality by employing a team of passionate experts in content writing, digital marketing, design, and advertising. Our approach involves deep analysis, strategic planning, and continuous improvement to meet and exceed client expectations. We strive to deliver the best possible results by understanding the target audience and aligning our efforts with your business goals."
      }
  ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Client’s FAQ"} pageDesc={"Solving business problems is an everyday."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
            <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
            <div className="onovo-faq-item onovo-collapse-item">
              <Accordion.Header>
              <h5 className="title onovo-collapse-btn">
                <span>{item.heading}</span>
                <i className="arrow" />
              </h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;