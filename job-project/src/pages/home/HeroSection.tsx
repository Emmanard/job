import Header from '../../components/common/Header';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/img_screenshot_20240620_at_11909am_1.svg')"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000000d8] to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="px-4 sm:px-6 lg:px-[38px] pt-[38px] pb-[38px]">
          {/* Header */}
          <Header className="mb-[100px] sm:mb-[140px] lg:mb-[184px]" />
          
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center mb-[280px] sm:mb-[400px] lg:mb-[562px]">
            {/* Main Title */}
            <h1 className="text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-light leading-[60px] sm:leading-[85px] md:leading-[105px] lg:leading-[122px] text-center uppercase text-text-white font-inter mb-2">
              Cape town escape
            </h1>
            
            {/* Trip Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[48px] mt-2 mb-6 px-4 sm:px-0">
              {/* Date */}
              <div className="flex items-center gap-4">
                <img 
                  src="/images/img_fi_3564184.svg" 
                  alt="Calendar"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
                />
                <span className="text-lg sm:text-xl lg:text-xl font-light leading-loose uppercase text-text-white font-poppins">
                  January 11-17, 2026
                </span>
              </div>
              
              {/* Participants */}
              <div className="flex items-center gap-4">
                <img 
                  src="/images/img_fi_681494.svg" 
                  alt="People"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
                />
                <span className="text-lg sm:text-xl lg:text-xl font-light leading-loose uppercase text-text-white font-poppins">
                  6 Founders 12 Models
                </span>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4">
                <img 
                  src="/images/img_group.svg" 
                  alt="Location"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
                />
                <span className="text-lg sm:text-xl lg:text-xl font-light leading-loose uppercase text-text-white font-poppins">
                  Iron man Villa
                </span>
              </div>
            </div>
            
            {/* Host Info */}
            <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-center text-text-white font-poppins mt-6">
              Hosted by Maurits & Dean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;