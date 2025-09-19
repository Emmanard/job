import React from 'react';

interface IconButtonProps {
  src: string;
  alt?: string;
  dimensions?: string;
  borderStyleCss?: string;
 wh?: string; 
 w_h?: string;
  padding?: string;
  className?: string;
  onClick?: () => void;
}

const IconButton = ({
  src,
  alt = "Icon",
  dimensions = "60*60",
  borderStyleCss,
  padding,
  className = "",
  onClick
}: IconButtonProps) => {
  // Parse dimensions
  const [width, height] = dimensions.split('*').map(d => d.trim());
  
  // Parse padding
  const getPadding = (paddingStr?: string) => {
    if (!paddingStr) return '';
    const parts = paddingStr.split(',');
    let classes = '';
    
    parts.forEach(part => {
      const [side, value] = part.split('=');
      const sideMap: { [key: string]: string } = {
        't': 'pt',
        'r': 'pr', 
        'b': 'pb',
        'l': 'pl'
      };
      
      if (sideMap[side]) {
        classes += ` ${sideMap[side]}-[${value}]`;
      }
    });
    
    return classes.trim();
  };

  // Parse border styles
  const getBorderStyles = (borderStr?: string) => {
    if (!borderStr) return '';
    
    let classes = '';
    const parts = borderStr.split(',').map(p => p.trim());
    
    parts.forEach(part => {
      if (part.includes('border=')) {
        const borderValue = part.split('=')[1];
        const [width, style, color] = borderValue.split(' ');
        classes += ` border-[${width}] border-${style} border-[${color}]`;
      } else if (part.includes('border_radius=')) {
        const radiusValue = part.split('=')[1];
        classes += ` rounded-[${radiusValue}]`;
      }
    });
    
    return classes.trim();
  };

  const paddingClasses = getPadding(padding);
  const borderClasses = getBorderStyles(borderStyleCss);

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-95 ${paddingClasses} ${borderClasses} ${className}`}
      aria-label={alt}
    >
      <img 
        src={src} 
        alt={alt}
        className={`w-[${width}px] h-[${height}px]`}
      />
    </button>
  );
};

export default IconButton;