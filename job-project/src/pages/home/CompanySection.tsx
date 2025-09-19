import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';

const CompanySection = () => {
  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        {/* Main Content Stack */}
        <div className="relative w-full h-auto lg:h-[900px] mb-[100px]">
          
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 bg-gradient-to-b from-background-black to-transparent rounded-xl p-6 sm:p-8 lg:p-[64px]">
            
            {/* Left Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-start">
              <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
                <img 
                  src="/images/img_screenshot_2025_09_17.png" 
                  alt="What is Syndicate"
                  className="w-full h-[250px] sm:h-[300px] lg:h-[342px] object-cover rounded-lg mb-9"
                />
                
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[50px] sm:leading-[65px] lg:leading-[78px] text-left uppercase text-text-white font-inter mb-2">
                  What is
                </h3>
                
                <img 
                  src="/images/image 12 (1).svg" 
                  alt="Syndicate Logo"
                  className="w-full lg:w-[36%] h-[40px] sm:h-[48px] lg:h-[56px] object-contain mb-8"
                />
                
                <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins w-full lg:w-[36%]">
                  Brand that explores life while being funded by brands that partner with us as well as the entrepreneurs that join us along for the ride.
                </p>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-[28%] flex flex-col gap-[50px]">
              <img 
                src="/images/img_screenshot_2025_09_17_342x438.png" 
                alt="How Does It Work"
                className="w-full h-[250px] sm:h-[300px] lg:h-[342px] object-cover rounded-lg"
              />
              
              <div className="flex flex-col gap-[26px]">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[50px] sm:leading-[60px] lg:leading-[64px] text-left uppercase text-text-white">
                  <span className="font-inter font-normal">How Does</span>
                  <br />
                  <span className="font-aspira font-normal italic">It Work?</span>
                </h3>
                
                <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins w-full lg:w-[90%]">
                  If you are a model or entrepreneur simply apply through the link. If approved, simply show up and everything is taken care of.
                </p>
              </div>
            </div>
          </div>
          
          {/* Center Video/Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[80%] lg:w-[32%] h-[400px] sm:h-[600px] lg:h-[900px] hidden lg:block">
            <div className="relative w-full h-full">
              <img 
                src="/images/img_screenshot_2025_09_17_900x550.png" 
                alt="Syndicate Experience"
                className="w-full h-full object-cover rounded-lg"
              />
              <IconButton
                src="/images/img_group_57.svg"
                alt="Play Video"
                wh="80*80"
                borderStyleCss="border_radius=40px"
                padding="t=24px,r=24px,b=24px,l=24px"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background-white-transparent shadow-[0px_4px_20px_#888888ff]"
              />
            </div>
          </div>
        </div>
        
        {/* Last Trip Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 bg-background-black rounded-lg p-6 sm:p-8 lg:p-[86px] shadow-[0px_10px_50px_#0000000c]">
          
          {/* Left Content */}
          <div className="w-full lg:w-[38%] flex flex-col justify-start">
            <div className="flex flex-col gap-[6px] mb-[26px]">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[60px] sm:leading-[75px] lg:leading-[88px] text-left uppercase text-text-white font-inter">
                Our last Trip:
              </h3>
              <h4 className="text-3xl sm:text-4xl lg:text-4xl font-semibold italic leading-[45px] sm:leading-[55px] lg:leading-[58px] text-left uppercase text-text-white font-aspira">
                Monaco
              </h4>
            </div>
            
            <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins w-full lg:w-[88%] mb-[82px]">
              First Africa Experience unlocked.
              <br /><br />
              The vision to create the ultimate environment to attract high quality people. Your network is your net-worth kinda vibe. Giving affluent young business owners a platform to appreciate their success seemed like a great way to do it. Fly in, show up.
            </p>
            
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
              className="w-auto"
            />
          </div>
          
          {/* Right Images */}
          <div className="w-full lg:flex-1 flex flex-col gap-[30px]">
            
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row gap-[30px]">
              <div className="relative w-full sm:flex-1">
                <img 
                  src="/images/img_image_38.png" 
                  alt="Monaco Experience 1"
                  className="w-full h-[250px] sm:h-[280px] lg:h-[316px] object-cover rounded-lg"
                />
                <IconButton
                  src="/images/img_group_57.svg"
                  alt="Play Video"
                  wh="60*60"
                  borderStyleCss="border_radius=40px"
                  padding="t=24px,r=24px,b=24px,l=24px"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background-white-transparent shadow-[0px_4px_20px_#888888ff]"
                />
              </div>
              <img 
                src="/images/img_screenshot_2025_09_18.png" 
                alt="Monaco Experience 2"
                className="w-full sm:w-[40%] h-[200px] sm:h-[250px] lg:h-[316px] object-cover rounded-lg"
              />
            </div>
            
            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row gap-[34px] justify-center">
              <img 
                src="/images/img_screenshot_2025_09_18_188x280.png" 
                alt="Monaco Experience 3"
                className="w-full sm:w-[32%] h-[150px] sm:h-[160px] lg:h-[188px] object-cover rounded-lg"
              />
              <img 
                src="/images/img_screenshot_2025_09_18_1.png" 
                alt="Monaco Experience 4"
                className="w-full sm:w-[32%] h-[150px] sm:h-[160px] lg:h-[188px] object-cover rounded-lg"
              />
              <img 
                src="/images/img_screenshot_2025_09_17_188x280.png" 
                alt="Monaco Experience 5"
                className="w-full sm:w-[32%] h-[150px] sm:h-[160px] lg:h-[188px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;