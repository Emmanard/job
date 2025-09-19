import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';

const WorkSection = () => {
  const referralPrograms = [
    {
      title: "Refer 1 Entrepreneur",
      description: "Get access to Syndicate Members Club"
    },
    {
      title: "Refer 2 Entrepreneur", 
      description: "Get access to Syndicate Members Club\nExclusive invite to Syn Pop-Up Party in Ibiza"
    },
    {
      title: "Refer 3 Entrepreneur",
      description: "Get access to Syndicate Members Club\nExclusive invite to Syn Pop-Up Party in Ibiza\nInvite to Syndicate Trip"
    }
  ];

  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        {/* Main Content Stack */}
        <div className="relative w-full min-h-[800px] lg:min-h-[1116px] bg-gradient-to-b from-background-black to-transparent rounded-lg p-6 sm:p-8 lg:p-[100px_44px]">
          
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">

            {/* Left Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-start pr-0 lg:pr-[36px] pl-0 lg:pl-[36px] mt-0 lg:mt-[38px] relative z-10">

              {/* Brand Collaboration Section */}
              <div className="w-full lg:w-[42%] flex flex-col gap-[42px] mb-[88px]">
                <div className="flex flex-col gap-[42px]">
                  <div className="flex items-start gap-6">
                    <img 
                      src="/images/img_fi_2622831.svg"
                      alt="Brand Collaboration"
                      className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] mt-2"
                    />
                    <h3 className="text-2xl sm:text-2xl lg:text-2xl font-normal leading-[32px] text-left uppercase text-text-white font-inter w-[62%]">
                      Brand<br />Collaboration
                    </h3>
                  </div>
                  
                  <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins w-full">
                    Do you have a brand that can benefit from the content we create? We will shoot and execute your next campaign on our next trip.
                  </p>
                  
                  <Button
                    text="Apply Here"
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
              </div>

              {/* Brand Collaboration Text */}
              <div className="w-full lg:w-[42%] flex flex-col gap-4 mb-4">
                <p className="text-base font-bold leading-snug text-left text-text-white font-loyal">
                  <span className="font-inter font-normal uppercase">BRAND COLLABORATION</span>
                  <br />
                  <span className="font-inter font-normal">On The Last Trip</span>
                </p>
              </div>

           
         {/* Brand Collaboration Image */}
<div className="relative w-[40%] lg:w-[35%] h-[180px] lg:h-[214px] mt-4">
  <img 
    src="/images/img_image_10.png" 
    alt="Brand Collaboration Example"
    className="w-full h-full object-contain rounded-lg"
  />

  {/* Vector shifted right to point toward center image */}
  <img 
    src="/images/img_vector_101.svg"
    alt="Collaboration Icon"
    className="absolute top-1/2 right-[-40px] lg:right-[-60px] w-[60px] h-[80px] lg:w-[100px] lg:h-[120px] transform -translate-y-1/2"
  />
</div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[30%] flex flex-col gap-[40px] mt-0 lg:mt-[50px]">
              {/* Header */}
              <div className="flex items-start gap-6">
                <img 
                  src="/images/img_fi_1357733.svg"
                  alt="Referral Program"
                  className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] mt-2"
                />
                <h3 className="text-2xl sm:text-2xl lg:text-2xl font-semibold leading-[32px] text-left uppercase text-text-white w-[86%]">
                  <span className="font-inter font-normal">Referral & Partnership Program</span>
                </h3>
              </div>

              {/* Referral Programs */}
              <div className="flex flex-col gap-[30px] w-full mr-0 lg:mr-[36px] ml-1">
                {referralPrograms.map((program, index) => (
                  <div key={index} className="bg-background-black rounded-lg p-6 lg:p-[24px_30px] shadow-[0px_10px_30px_#0000000c]">
                    <div className="flex flex-col gap-[10px] justify-center items-start">
                      <h4 className="text-xl font-bold leading-[29px] text-left text-text-white">
                        <span className="font-inter font-normal italic">Refer </span>
                        <span className="font-inter font-bold uppercase">{program.title.split(' ').slice(1).join(' ')}</span>
                      </h4>
                      <p className="text-base font-light leading-normal text-left text-text-muted font-poppins whitespace-pre-line">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Video/Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[80%] lg:w-[32%] h-[400px] sm:h-[600px] lg:h-[966px] hidden lg:block">
            <div className="relative w-full h-full">
              <img 
                src="/images/img_screenshot_2024_06_26.png" 
                alt="Work With Us"
                className="w-full h-full object-cover rounded-lg"
              />
              <IconButton
                src="/images/img_group_57.svg"
                alt="Play Video"
                w_h="80*80"
                borderStyleCss="border_radius=40px"
                padding="t=24px,r=24px,b=24px,l=24px"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background-white-transparent shadow-[0px_4px_20px_#888888ff]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;
