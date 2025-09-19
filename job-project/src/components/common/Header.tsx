import  { useState } from 'react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`w-full ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-end ml-0 lg:ml-[90px]">
            <img 
              src="/images/image 12 (1).svg" 
              alt="Syndicate Travel Logo"
              className="w-[180px] h-[24px] sm:w-[200px] sm:h-[28px] md:w-[220px] md:h-[30px] lg:w-[252px] lg:h-[34px]"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-[16%] gap-10">
            {/* Instagram Icon Button */}
            <IconButton
              src="/images/img_u_instagram.svg"
              alt="Instagram"
              borderStyleCss="border=2 solid #ffffff, border_radius=30px"
              padding="t=14px,r=14px,b=14px,l=14px"
              
              className="w-14 h-14 px-1 py-3 rounded-full bg-icon-button-background border-2 border-white"
            />

            {/* Apply Now Button */}
            <Button
              text="Apply now"
              text_font_size="10"
              text_font_family="Poppins"
              text_font_weight="500"
              text_line_height="31px"
              text_text_align="left"
              text_text_transform="uppercase"
              text_color="#1e1e1e"
              fill_background_color="#ffffff"
              padding="t=12px,r=32px,b=12px,l=32px"
              className="w-auto lg:px-6 lg:py-3  text-sm lg:text-base"
            />
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 z-50`}>
            <div className="flex flex-col items-center py-6 space-y-4">
              {/* Mobile Instagram Button */}
              <IconButton
                src="/images/img_u_instagram.svg"
                alt="Instagram"
                borderStyleCss="border=2 solid #ffffff, border_radius=30px"
                padding="t=14px,r=14px,b=14px,l=14px"
                wh="50*50"
                className="bg-icon-button-background border-icon-button-border"
              />

              {/* Mobile Apply Button */}
              <Button
                text="Apply now"
                text_font_size="18"
                text_font_family="Poppins"
                text_font_weight="500"
                text_line_height="28px"
                text_text_align="center"
                text_text_transform="uppercase"
                text_color="#1e1e1e"
                fill_background_color="#ffffff"
                padding="t=10px,r=24px,b=10px,l=24px"
                className="w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;