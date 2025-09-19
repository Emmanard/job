import Button from '../../components/ui/Button';

const FooterSection = () => {
  return (
    <section className="w-full bg-background-dark-1 py-[75px] sm:py-[125px] lg:py-[150px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        <div className="bg-background-black rounded-xl shadow-[0px_10px_30px_#00000019]">
          
          {/* Main Footer Content */}
          <div className="flex flex-col w-full mb-[50px] lg:mb-[64px]">
            
            {/* Hero Text with Background */}
            <div className="relative w-full bg-gradient-to-b from-background-black to-transparent rounded-t-xl p-6 sm:p-8 lg:p-[64px_80px] flex items-center justify-center">
              
              {/* Large Syndicate Text */}
              <h2 className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-semibold italic leading-[1] text-center uppercase text-text-white font-aspira break-words max-w-full">
                syndicate
              </h2>

              {/* Copyright and Back to Top - overlay on top */}
              <div className="absolute top-4 left-0 w-full flex justify-between px-6 sm:px-8 lg:px-[80px] z-10">
                <p className="text-base font-light leading-normal text-text-white font-poppins">
                  © 2025 Syndicate. All rights reserved.
                </p>
                <p className="text-base font-light leading-normal text-text-white font-poppins">
                  Back to top
                </p>
              </div>
            </div>
            
            {/* Bottom Content */}
            <div className="px-6 sm:px-8 lg:px-[80px] mt-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
                
                {/* Left Content */}
                <div className="flex flex-col gap-[32px] w-full lg:flex-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-[45px] sm:leading-[50px] lg:leading-[57px] text-left uppercase text-text-white font-inter">
                    Join The Exclusive Community &<br />Creating Memories Around The World
                  </h3>
                  <p className="text-base font-light leading-normal text-left text-text-white font-poppins">
                    Privacy Policy
                  </p>
                </div>
                
                {/* Right Content */}
                <div className="flex flex-col gap-[60px] items-end w-auto">
                  <Button
                    text="Apply now"
                    text_font_size="20"
                    text_font_family="Poppins"
                    text_font_weight="500"
                    text_line_height="31px"
                    text_text_align="left"
                    text_text_transform="uppercase"
                    text_color="#1e1e1e"
                    fill_background_color="#ffffff"
                    padding="t=12px,r=34px,b=12px,l=34px"
                    className="w-auto whitespace-nowrap"
                  />
                  <p className="text-base font-light leading-normal text-right text-text-white font-poppins">
                    Term & Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
