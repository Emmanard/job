import ExpandableList from '../../components/ui/ExpandableList';

const FAQSection = () => {
  const faqItems = [
    {
      id: "faq-1",
      question: "What services does SYNDICATE offer to its members?",
      answer: "SYNDICATE provides a variety of travel packages tailored for models and entrepreneurs, including luxury accommodations, exclusive events, networking opportunities, and personalized itineraries."
    },
    {
      id: "faq-2", 
      question: "How can I become a member of SYNDICATE?",
      answer: "To become a member, simply apply through our application process. Models can join for free, while entrepreneurs have membership options starting at $5,000/year or by joining at least one Syndicate trip."
    },
    {
      id: "faq-3",
      question: "What destinations does SYNDICATE cover?",
      answer: "We offer exclusive trips to premium destinations worldwide including Cape Town, Monaco, French Alps, Tahiti, Egypt, and many other luxury locations carefully selected for unique experiences."
    },
    {
      id: "faq-4",
      question: "Are the travel packages customizable?",
      answer: "Yes, our travel packages can be customized to meet specific preferences and requirements. We work closely with members to create personalized itineraries that match their interests and goals."
    },
    {
      id: "faq-5",
      question: "What are the benefits of traveling with SYNDICATE?",
      answer: "Members enjoy luxury accommodations, exclusive networking opportunities, professional content creation, access to high-net-worth individuals, curated experiences, and the chance to build meaningful business relationships while exploring the world."
    }
  ];

  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0">
          
          {/* Left Content */}
          <div className="w-full lg:w-[42%] flex flex-col gap-[88px]">
            
            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-normal leading-[50px] sm:leading-[60px] lg:leading-[67px] text-left uppercase text-text-white w-full lg:w-[96%]">
              <span className="font-inter">Frequently </span>
              <span className="font-aspira font-normal italic">Asked</span>
              <span className="font-inter"> Questions</span>
            </h2>
            
            {/* FAQ Image */}
            <img 
              src="/images/img_screenshot_2025_09_18_728x584.png" 
              alt="FAQ Support"
              className="w-full lg:w-[90%] h-[400px] sm:h-[500px] lg:h-[728px] object-cover rounded-lg"
            />
          </div>
          
          {/* Right Content - FAQ List */}
          <div className="w-full lg:flex-1">
            <ExpandableList 
              items={faqItems}
              className="w-full"
              renderArrow={(index) =>
                <img
                  src={index === 0 ? "/images/img_u_arrow_up_right.svg" : "/images/img_u_arrow_down.svg"}
                  alt="Arrow"
                  className={`w-[24px] h-[24px] ${index === 0 ? "w-[32px] h-[32px]" : ""}`}
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
