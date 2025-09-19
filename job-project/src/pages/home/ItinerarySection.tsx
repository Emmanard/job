import React, { useState } from 'react';

const ItinerarySection = () => {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  const itineraryItems = [
    {
      day: 1,
      title: "Day 1",
      date: "Sunday. January 11",
      description:
        "Embark on an unforgettable adventure starting from the stunning island of Mallorca, where we will set sail on a luxurious yacht to the vibrant shores of Ibiza. Indulge in the ultimate high-end experience with stays in breathtaking villas."
    },
    { day: 2, title: "Day 2", date: "Monday. January 12", description: "" },
    { day: 3, title: "Day 3", date: "Tuesday. January 13", description: "" },
    { day: 4, title: "Day 4", date: "Wednesday. January 14", description: "" },
    { day: 5, title: "Day 5", date: "Thursday. January 15", description: "" }
  ];

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? 0 : day);
  };

  return (
    <section className="w-full bg-background-dark-1 py-[75px] sm:py-[125px] lg:py-[150px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        {/* Section Title */}
        <div className="text-center mb-[62px]">
          <h2 className="text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-light leading-[60px] sm:leading-[85px] md:leading-[105px] lg:leading-[100px] text-center uppercase text-text-white font-inter">
            <span>Itinerary </span>
            <span className="font-aspira font-normal italic">5 Days Activity.</span>
          </h2>
        </div>

        {/* Itinerary Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px] items-start">
          {/* Left Image */}
          <div className="w-full lg:w-[24%]">
            <img
              src="/images/img_image_35.png"
              alt="Cape Town Itinerary"
              className="w-full h-[150px] sm:h-[160px] lg:h-[178px] object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            {itineraryItems.map((item) => {
              const isExpanded = expandedDay === item.day;
              const isDayOne = item.day === 1;

              return (
                <div
                  key={item.day}
                  className="bg-background-black rounded-lg p-5 lg:p-[20px] shadow-[0px_10px_30px_#00000019]"
                >
                  <button
                    onClick={() => toggleDay(item.day)}
                    className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center focus:outline-none gap-4 lg:gap-6"
                  >
                    {/* Left: Title and Date */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl lg:text-2xl font-semibold italic leading-snug uppercase text-text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg lg:text-lg font-light leading-[30px] uppercase text-text-white font-inter">
                        {item.date}
                      </p>
                    </div>

                    {/* Middle: Description */}
                    <p className={`flex-1 text-lg lg:text-lg font-light leading-relaxed font-poppins mx-4 ${isExpanded ? 'text-text-muted' : 'text-text-muted/50'}`}>
                      {item.description || "No activities planned for today."}
                    </p>

                    {/* Right: Arrow */}
                    <img
                      src={
                        isDayOne
                          ? "/images/img_u_arrow_up_right.svg"
                          : "/images/img_u_arrow_down.svg"
                      }
                      alt="Expand"
                      className={`flex-shrink-0 ${
                        isDayOne ? "w-[32px] h-[32px]" : "w-[24px] h-[24px]"
                      } ${isDayOne ? "ml-auto" : ""}`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
