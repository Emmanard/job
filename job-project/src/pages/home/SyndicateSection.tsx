import Button from '../../components/ui/Button';

const SyndicateSection = () => {
  return (
    <section className="w-full bg-background-dark-1 py-[66px] sm:py-[100px] lg:py-[132px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-[30px]">
          
          {/* Left Content */}
          <div className="w-full lg:w-[82%] flex flex-col lg:flex-row gap-8 lg:gap-0">
            
            {/* Text Content */}
            <div className="w-full lg:flex-1 flex flex-col gap-[38px]">
              {/* Title */}
              <h2 className="flex items-baseline text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold italic uppercase text-text-white">
                <span className="font-aspira mr-3">Syndicate</span>
                <span className="font-inter ml-12 font-normal not-italic">Trip</span>
              </h2>
              
              {/* Content Row */}
              <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0">
                {/* Images Stack */}
                <div className="w-full lg:w-[36%] relative">
                  <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[554px]">
                    
                    {/* Top Image */}
                    <img 
                      src="/images/img_image_32.png" 
                      alt="Cape Town Experience 1"
                      className="absolute top-0 left-0 w-full lg:w-[74%] h-[45%] object-cover rounded-lg z-30"
                    />

                    {/* Middle Image (shifted left, overlaps both) */}
                    <img 
                      src="/images/img_image_33.png" 
                      alt="Cape Town Experience 2"
                      className="absolute top-1/2 -left-6 sm:-left-10 lg:-left-14 transform -translate-y-1/2 w-full lg:w-[74%] h-[45%] object-cover rounded-lg z-20"
                    />

                    {/* Bottom Image */}
                    <img 
                      src="/images/img_image_34.png" 
                      alt="Cape Town Experience 3"
                      className="absolute bottom-0 left-0 w-full lg:w-[74%] h-[45%] object-cover rounded-lg z-10"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-[58%] lg:ml-8 flex flex-col justify-start">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-[45px] sm:leading-[55px] lg:leading-[59px] text-left uppercase text-text-white font-inter mb-4">
                    The Cape town Escape
                  </h3>
                  
                  <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins mb-6 lg:mb-8">
                    Embark on an unforgettable adventure starting from the stunning island of Mallorca, where we will set sail on a luxurious yacht to the vibrant shores of Ibiza.
                    <br /><br />
                    Indulge in the ultimate high-end experience with stays in breathtaking villas, enjoying the best of both worlds – serene island beauty and the electrifying Ibiza nightlife.
                    <br /><br />
                    Get ready to create unforgettable memories and amazing content in one of the most iconic party destinations in the world.
                  </p>
                  
                  <p className="text-lg sm:text-lg lg:text-lg font-normal leading-[25px] text-left uppercase text-text-white font-inter">
                    Become to the member bellow here...
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
 <div className="w-full lg:w-[28%] flex flex-col items-center">
  <div className="w-full flex flex-col items-end">
    
    {/* Top Image with Arrow */}
    <div className="relative w-full lg:w-[390px] h-[200px] lg:h-[260px] mb-4 lg:mb-0 lg:ml-[28px] z-30">
      <img 
        src="/images/img_image_36.png" 
        alt="Cape Town Villa"
        className="w-full h-full object-cover rounded-lg"
      />
      <img 
        src="/images/img_u_arrow_up_right.svg"
        alt="Arrow"
        className="absolute top-4 right-4 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
      />
    </div>
    
    {/* Info Card */}
    <div className="w-full lg:w-[350px] bg-background-black rounded-lg shadow-[0px_10px_30px_#00000019] p-6 lg:p-[30px] -mt-[100px] lg:-mt-[200px] mr-0 lg:mr-[20px] relative z-20">
      
      {/* Card Images */}
      <div className="relative w-full flex flex-col items-center mb-6 lg:mb-[44px]">
        
        {/* Second image (full card width) */}
        <img 
          src="/images/img_image_30.png" 
          alt="Villa Overview"
          className="w-[350px] object-cover rounded-lg z-10"
        />

        {/* Third image (80% width, centered, under second) */}
        <img 
          src="/images/img_image_31.png" 
          alt="Villa Detail"
          className="w-[80%] -mt-8 object-cover rounded-lg z-0"
        />
      </div>
      
      {/* Card Content */}
      <div className="px-4 lg:px-[34px]">
        <div className="flex flex-col gap-5 mb-6 lg:mb-[44px]">
          <p className="text-lg sm:text-lg lg:text-lg font-bold italic leading-[25px] text-left uppercase text-text-white">
            11th to 17th January
          </p>
          <p className="text-lg sm:text-lg lg:text-lg font-bold italic leading-[25px] text-left uppercase text-text-white">
            Ironman Villa
          </p>
          <p className="text-lg sm:text-lg lg:text-lg font-bold italic leading-[25px] text-left uppercase text-text-white">
            Cape Town, South Africa
          </p>
          <p className="text-lg sm:text-lg lg:text-lg font-bold italic leading-[25px] text-left uppercase text-text-white">
            6 Founders 12 Models
          </p>
        </div>
        
        <Button
          text="Apply now"
          text_font_size="20"
          text_font_family="Poppins"
          text_font_weight="500"
          text_line_height="31px"
          text_text_align="left"
          text_text_transform="uppercase"
          text_color="#101010"
          fill_background_color="#ffffff"
          padding="t=12px,r=34px,b=12px,l=34px"
          className="w-full mb-5"
        />
        
        <p className="text-sm font-light leading-snug text-center text-text-muted font-poppins">
          Apply to join for the detailed itinerary!
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

export default SyndicateSection;
