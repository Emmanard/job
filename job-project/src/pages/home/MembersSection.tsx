
import List from '../../components/ui/List';

const MembersSection = () => {
  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Left Image */}
          <div className="w-full lg:w-[48%]">
            <img 
              src="/images/img_gaaaang_2_52_1.png" 
              alt="Syndicate Members"
              className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-lg"
            />
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-[44%] flex flex-col gap-[30px]">
            
            {/* Header with Logo */}
            <div className="flex items-end gap-[34px] justify-start px-0 lg:px-[56px]">
              <img 
                src="/images/img_vector.svg"
                alt="Quote Left"
                className="w-[36px] h-[80px] lg:w-[48px] lg:h-[102px] mb-[10px]"
              />
              
              <div className="flex flex-col gap-3 items-center flex-1">
                <img 
                  src="/images/image 12 (1).svg" 
                  alt="Syndicate Logo"
                  className="w-full h-[40px] sm:h-[48px] lg:h-[58px] object-contain"
                />
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-normal leading-[50px] sm:leading-[60px] lg:leading-[68px] text-center uppercase text-text-white font-inter">
                  Members
                </h2>
              </div>
              
              <img 
                src="/images/img_vector.svg"
                alt="Quote Right"
                className="w-[36px] h-[80px] lg:w-[48px] lg:h-[102px] mb-[10px]"
              />
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center px-0 lg:px-[92px]">
              <span className="text-2xl font-normal leading-xl text-left uppercase text-text-white font-inter">
                Trips
              </span>
              <span className="text-2xl font-normal leading-xl text-left uppercase text-text-white font-inter">
                Network
              </span>
              <span className="text-2xl font-normal leading-xl text-left uppercase text-text-white font-inter">
                Contacts
              </span>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-center text-text-muted font-poppins">
              High-net-worth individuals, entrepreneurs, and individuals seeking elite social and business networking and travel opportunities.
            </p>
            
            {/* Membership Options */}
            <List direction="horizontal" gap="gap-[40px]">
              <div className="bg-background-black rounded-lg p-6 lg:p-[20px_30px] shadow-[0px_10px_30px_#0000000c] w-full sm:w-[324px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold leading-loose text-left text-text-white font-poppins">
                    For Models
                  </h3>
                  <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins mb-[18px]">
                    Models join for free. Simply apply to join.
                  </p>
                </div>
              </div>
              
              <div className="bg-background-black rounded-lg p-6 lg:p-[24px_30px] shadow-[0px_10px_30px_#0000000c] w-full sm:w-[324px]">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold leading-loose text-left text-text-white font-poppins">
                    For Entrepreneurs
                  </h3>
                  <p className="text-lg sm:text-lg lg:text-lg font-light leading-relaxed text-left text-text-muted font-poppins mb-[14px]">
                    $5,000/year or Join us on at least 1 Syn trip
                  </p>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;