import List from '../../components/ui/List';

const UpcomingTripsSection = () => {
  const upcomingTrips = [
    {
      destination: "Eggypt",
      date: "October 4-10, 2024",
      image: "/images/img_image_39.png"
    },
    {
      destination: "Monaco", 
      date: "November 3-8, 2024",
      image: "/images/img_image_40.png"
    },
    {
      destination: "French Alps",
      date: "January 10-15, 2025", 
      image: "/images/img_pexels_chavdar.png"
    },
    {
      destination: "Tahiti",
      date: "December 4-10, 2024",
      image: "/images/img_pexels_vincent.png"
    }
  ];

  return (
    <section className="w-full bg-background-dark-1 py-[75px] sm:py-[125px] lg:py-[150px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        
        <div className="bg-gradient-to-b from-background-black to-transparent rounded-xl p-6 sm:p-8 lg:p-[88px_56px_88px_80px]">
          
          {/* Section Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[60px] sm:leading-[75px] lg:leading-[94px] text-left uppercase text-text-white mb-[56px]">
            <span className="font-inter font-normal">Upcoming </span>
            <span className="font-aspira font-normal italic">Trips</span>
          </h2>
          
          {/* Trips List */}
          <List direction="horizontal" gap="gap-[30px]" className="mb-[10px]">
            {upcomingTrips?.map((trip, index) => (
              <div key={index} className="flex flex-col gap-[22px] sm:gap-[24px] items-center w-full sm:w-[300px] lg:w-[360px]">
                <img 
                  src={trip?.image} 
                  alt={trip?.destination}
                  className="w-full h-[200px] sm:h-[240px] lg:h-[270px] object-cover rounded-lg"
                />
                
                <div className="flex flex-col gap-[14px] items-start w-full">
                  <h3 className="text-3xl sm:text-3xl lg:text-3xl font-normal leading-[40px] sm:leading-[45px] lg:leading-[49px] text-left uppercase text-text-white font-inter">
                    {trip?.destination}
                  </h3>
                  <p className="text-xl font-light leading-loose text-left text-text-muted font-poppins">
                    {trip?.date}
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

export default UpcomingTripsSection;