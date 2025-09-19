const FreedomSection = () => {
  return (
    <section 
      className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] bg-cover bg-center bg-no-repeat py-[150px] sm:py-[250px] lg:py-[326px]"
      style={{
        backgroundImage: "url('/images/img_1232411.png')"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-semibold italic leading-[60px] sm:leading-[85px] md:leading-[105px] lg:leading-[121px] text-center uppercase text-text-white font-aspira">
            FREEDOM.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FreedomSection;