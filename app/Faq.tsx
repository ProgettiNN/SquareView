"use client"
import React, { useState, useEffect } from 'react';

const Faq = ({ editedText, buttoncolor }:any) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const getBrightness = (color:any) => {
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

  const toggleQuestion = (index:any) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-4 items-center flex-wrap justify-between w-full">
      {editedText.map((question:any, index:any) => (
        <div key={index} className="flex flex-col w-full max-w-screen-md">
          <h3
            className={`cursor-pointer p-4 mx-auto w-full flex justify-between items-center bg-slate-400 ${textColor}`}
            style={{ background: `${buttoncolor}` }}
            onClick={() => toggleQuestion(index)}
          >
            <p>{question.dom}</p>
            <span className="text-xl">
              {openQuestionIndex === index ? '-' : '+'}
            </span>
          </h3>
          {openQuestionIndex === index && <p className="p-4">{question.risp}</p>}
        </div>
      ))}
    </section>
  );
};

export default Faq;
