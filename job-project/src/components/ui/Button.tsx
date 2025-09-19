import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-white',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-white',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

// Utility: parse shorthand padding "t=10px,r=20px,b=10px,l=20px"
const parseBoxValues = (input?: string) => {
  if (!input) return {};
  const parts = input.split(",");
  const style: Record<string, string> = {};
  parts.forEach((p) => {
    const [key, value] = p.split("=");
    if (key && value) {
      if (key.trim() === "t") style.paddingTop = value.trim();
      if (key.trim() === "r") style.paddingRight = value.trim();
      if (key.trim() === "b") style.paddingBottom = value.trim();
      if (key.trim() === "l") style.paddingLeft = value.trim();
    }
  });
  return style;
};

interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonClasses> {
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right' | 'justify';
  text_text_transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  padding?: string; // ✅ new shorthand padding prop
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  text = "Apply now",
  text_font_size = "16",
  text_font_family = "Poppins",
  text_font_weight = "500",
  text_line_height = "24px",
  text_text_align = "center",
  text_text_transform = "uppercase",
  text_color = "#ffffff",
  fill_background_color = "transparent",
  border_border = "1px solid #ffffff",
  padding,
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        className
      )}
      style={{
        fontSize: text_font_size,
        fontFamily: text_font_family,
        fontWeight: text_font_weight,
        lineHeight: text_line_height,
        textAlign: text_text_align,
        textTransform: text_text_transform,
        color: text_color,
        backgroundColor: fill_background_color,
        border: border_border,
         whiteSpace: 'nowrap',
        ...parseBoxValues(padding),
      }}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
