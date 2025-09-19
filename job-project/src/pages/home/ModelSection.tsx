
import Button from '../../components/ui/Button';
import Grid from '../../components/ui/Grid';
import IconButton from '../../components/ui/IconButton';

const ModelSection = () => {
  const models = [
    { name: "mahadrr", image: "/images/img_where_the_sun_kisses.png" },
    { name: "Kristiana", image: "/images/img_image_6.png", overlay: "/images/img_such_beautiful_store.png" },
    { name: "Rosan", image: "/images/img_image_7.png", overlay: "/images/img_desert_girl_1.png" },
    { name: "Marielle", image: "/images/img_unbothered_about.png" },
    { name: "Abbi Taylor", image: "/images/img_blessed_1.png" },
    { name: "Emily", image: "/images/img_daddy_s_home_and.png" },
    { name: "Zzeda", image: "/images/img_golden_skies.png" },
    { name: "Vanessa", image: "/images/img_a_happy_day.png" },
    { name: "Daniela", image: "/images/img_still_not_over_mykonos.png" },
    { name: "Marta Ratia", image: "/images/img_beach_days_are_the.png" },
    { name: "Gabriela", image: "/images/img_gratitude_is_magnet.png" }
  ];

  const guests = [
    { name: "Dean White", image: "/images/img_image_1.png", isHost: true },
    { name: "Maurits Neo", image: "/images/img_image_22.png", isHost: true }
  ];

  return (
    <section className="w-full bg-background-dark-1 py-[100px] sm:py-[150px] lg:py-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px] justify-center">
          
          {/* Models Section */}
          <div className="w-full lg:w-[40%] bg-gradient-to-b from-background-black to-transparent rounded-xl p-6 lg:p-[40px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 lg:mb-[38px]">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-[45px] sm:leading-[55px] lg:leading-[59px] text-left uppercase text-text-white font-inter">
                Models
              </h2>
              <Button
                text="12 Spots Models"
                text_font_size="16"
                text_font_family="Poppins"
                text_font_weight="300"
                text_line_height="24px"
                text_text_align="left"
                text_color="#ffffff"
                border_border="1px solid #ffffff"
                fill_background_color="transparent"
                padding="t=10px,r=20px,b=10px,l=20px"
                className="w-auto"
              />
            </div>
            
            {/* Models Grid */}
<div className="grid grid-cols-4 gap-x-8 gap-y-6 mb-6">
  {models.map((model, index) => (
    <div key={index} className="flex flex-col items-center gap-3">
      <div className="relative w-full aspect-square"> {/* Take full width of grid cell */}
        <img 
          src={model.image} 
          alt={model.name}
          className="w-full h-full object-cover rounded-lg"
        />
        {model.overlay && (
          <img 
            src={model.overlay} 
            alt={`${model.name} overlay`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <p className="text-base font-normal leading-snug text-center uppercase text-text-white font-inter">
        {model.name}
      </p>
    </div>
  ))}

  {/* Apply Button */}
  <div className="flex flex-col items-center gap-5 bg-background-dark-3 rounded-lg p-[10px] shadow-[0px_10px_30px_#00000019]">
    <IconButton
      src="/images/img_u_plus.svg"
      alt="Apply"
      wh="60*60"
      borderStyleCss="border=2 solid #ffffff, border_radius=30px"
      padding="t=18px,r=18px,b=18px,l=18px"
      className="mt-[14px]"
    />
    <p className="text-xl font-normal leading-relaxed text-center uppercase text-text-white font-inter">
      Apply
    </p>
  </div>
</div>
          </div>
          
          {/* Guests Section */}
          <div className="w-full lg:w-[40%] bg-gradient-to-b from-background-black to-transparent rounded-xl p-6 lg:p-[40px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 lg:mb-[28px]">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-[45px] sm:leading-[55px] lg:leading-[59px] text-left uppercase text-text-white font-inter">
                GUESTS
              </h2>
              <Button
                text="4/6 Spots Open"
                text_font_size="16"
                text_font_family="Poppins"
                text_font_weight="300"
                text_line_height="24px"
                text_text_align="left"
                text_color="#ffffff"
                border_border="1px solid #ffffff"
                fill_background_color="transparent"
                padding="t=10px,r=20px,b=10px,l=20px"
                className="w-auto"
              />
            </div>
            
            {/* Guests Grid */}
            <Grid columns={2} gap="gap-6" className="mb-6">
              {guests.map((guest, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="relative flex flex-col items-center">
                    {guest.isHost && (
                      <div className="bg-background-white text-text-primary text-xs font-normal leading-tight px-2 py-1 rounded shadow-[0px_2px_4px_#0000003f] mb-2 z-10">
                        HOST
                      </div>
                    )}
                    <img 
                      src={guest.image} 
                      alt={guest.name}
                      className="w-[120px] sm:w-[140px] lg:w-[150px] h-[120px] sm:h-[140px] lg:h-[150px] object-cover rounded-lg -mt-2"
                    />
                  </div>
                  <p className="text-base font-normal leading-snug text-center uppercase text-text-white font-inter">
                    {guest.name}
                  </p>
                </div>
              ))}
              
              {/* Apply Buttons */}
              {[1, 2, 3, 4].map((_, index) => (
                <div key={`apply-${index}`} className="flex flex-col items-center gap-5 bg-background-dark-3 rounded-lg p-[10px] shadow-[0px_10px_30px_#00000019]">
                  <IconButton
                    src="/images/img_u_plus.svg"
                    alt="Apply"
                    wh="60*60"
                    borderStyleCss="border=2 solid #ffffff, border_radius=30px"
                    padding="t=18px,r=18px,b=18px,l=18px"
                    className="mt-[14px]"
                  />
                  <p className="text-xl font-normal leading-relaxed text-center uppercase text-text-white font-inter">
                    Apply
                  </p>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;