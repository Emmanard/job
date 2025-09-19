
import List from '../../components/ui/List';

const FounderSection = () => {
  const founders = [
    {
      name: "Dean White",
      username: "@deanxwhite", 
      description: "7 figure serial entrepreneur in the tech & branding space, info product, crypto enthusiast and loves to travel.",
      image: "/images/img_000644950014_11a.png",
      isHost: true
    },
    {
      name: "Maurits Neo",
      username: "@maurits",
      description: "Entrepreneur, Content Creator & diversified global investments", 
      image: "/images/img_image_23.png",
      isHost: true
    }
  ];

  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        <div className="bg-background-black rounded-lg p-6 sm:p-8 lg:p-[80px_56px] shadow-[0px_10px_50px_#0000000c]">
          
          {/* Section Title */}
          <h2 className="text-7xl sm:text-8xl lg:text-10xl font-normal leading-[90px] sm:leading-[120px] lg:leading-[146px] text-center uppercase text-text-white font-inter mb-[44px]">
            Founders
          </h2>
          
          {/* Founders List */}
          <List direction="horizontal" gap="gap-[30px]" className="mb-[18px]">
            {founders?.map((founder, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-[30px] items-start w-full bg-background-dark-2 rounded-lg p-6 lg:p-[30px] shadow-[0px_10px_30px_#0000007f]">
                
                {/* Founder Image */}
                <img 
                  src={founder?.image} 
                  alt={founder?.name}
                  className="w-full sm:w-[280px] lg:w-[330px] h-[280px] sm:h-[280px] lg:h-[330px] object-cover rounded-lg"
                />
                
                {/* Founder Info */}
                <div className="flex flex-col justify-start w-full sm:flex-1">
                  
                  {/* Host Badge */}
                  {founder?.isHost && (
                    <div className="inline-flex justify-center items-center bg-background-white text-text-primary text-xl font-normal leading-relaxed px-4 py-2 rounded shadow-[0px_2px_4px_#0000003f] w-auto mb-3">
                      HOST
                    </div>
                  )}
                  
                  {/* Name and Username */}
                  <div className="flex flex-col gap-1 mb-[14px]">
                    <h3 className="text-3xl sm:text-3xl lg:text-3xl font-normal leading-[40px] sm:leading-[45px] lg:leading-[49px] text-left uppercase text-text-white font-inter">
                      {founder?.name}
                    </h3>
                    <p className="text-xl font-normal leading-relaxed text-left underline text-text-white font-inter">
                      {founder?.username}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins w-full">
                    {founder?.description}
                  </p>
                </div>
              </div>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;