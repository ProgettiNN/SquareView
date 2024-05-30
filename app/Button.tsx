"use client"
import React, { useEffect, useState } from 'react';

const Button = ({ buttoncolor, btn }: any) => {
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const getBrightness = (color: any) => {
      color = color.replace("#", "");
      let r = parseInt(color.substring(0, 2), 16);
      let g = parseInt(color.substring(2, 4), 16);
      let b = parseInt(color.substring(4, 6), 16);
      return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const updateTextColor = () => {
      const brightness = getBrightness(buttoncolor);
      setTextColor(brightness > 128 ? 'text-black font-semibold' : 'text-white');
    };

    updateTextColor();
  }, [buttoncolor]);

  return (
    <a href={btn.link} className='min-h-min mx-auto'>
      <button>
        <div style={{ background: `${buttoncolor}` }} className={`px-2 py-1 rounded-md ${textColor}`}>
          <p className=''>{btn.testo}</p>
        </div>
      </button>
    </a>
  );
};

export default Button;
