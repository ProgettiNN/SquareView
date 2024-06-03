// Importazioni necessarie
import fs from 'fs';
import path from 'path';
import Link from "next/link";
import React from "react";
import Navbar from './Navbar'; // Assicurati di avere questi componenti esportati separatamente
import Faq from './Faq';
import data from "../public/data.json";
import { Social } from './Social';
import Button from './Button';


// Componente per l'header
const App3 = (user: any) => {

  const {
    bgcolor,
    textcolor,
    detailscolor,
    buttoncolor,
    font,
    btn1,
    header,
    about,
    service,
    review,
    faq,
    cta,
    btn2,
    footer,
    social
  } = data;

  return (
    <section style={{ background: `${bgcolor}` }} className="">
      <div
        style={{
          background: `${bgcolor}`,
          color: `${textcolor}`,
        }}
        className={` flex flex-col  relative overflow-hidden `}
      >
        <Navbar buttoncolor={buttoncolor} btn={btn1} social={social}
          textcolor={textcolor} bgcolor={bgcolor}/>
        <Header editedText={header} detailscolor={detailscolor} bgcolor={bgcolor}/>
        <div className="h-40" />
        <About editedText={about} detailscolor={detailscolor} bgcolor={bgcolor} />
        <div className="h-40" />
        <Service editedText={service} bgcolor={bgcolor} detailscolor={detailscolor}/>
        <div className="h-40" />
        <Review editedText={review} />
        <div className="h-40" />
        <Faq editedText={faq} buttoncolor={detailscolor} />
        <div className="h-20" />
        <Cta editedText={cta} btn={btn2} buttoncolor={buttoncolor} />
        <Footer editedText={footer} social={social}
          textcolor={textcolor}/>
      </div>
    </section>
  );
};

const Header = ({
  editedText,
  detailscolor,
  bgcolor
}: any) => {
  const image = "./photo/header.webp"
  return (
    <section
      id="header"
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" max-w-screen-2xl mx-auto  h-screen sm:justify-center justify-end z-10 flex flex-col gap-2 w-full">
      <div className="p-8 max-w-screen-md border-transparent bg-clip-padding border flex flex-col " style={{ borderColor: detailscolor, background:bgcolor }}>
        
        <p className="md:text-[1.5rem]">{editedText.titolo}</p>
        <h1 className="text-pretty font-semibold md:text-[2.5rem] text-[1.5rem]">{editedText.slogan}</h1>
        <p className="md:text-[1.3rem]">{editedText.descrizione}</p>
      </div>
      </div>
    </section>
  );
};

const Service = ({ editedText, detailscolor, bgcolor }: any) => {
  return (
    <section
      id="servizi"
      className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-auto-fit"
    >
      {editedText.map((service: any, index: any) => (
        <div
          key={index}
          className="flex flex-col items-center w-full gap-2 p-2 h-full"
        >
          <Servimg index={index} />
          <div className="flex flex-col w-[90%] gap-2 p-3 text-center  border z-10"style={{ borderColor: detailscolor, background:bgcolor }}>
            <h3 className="font-bold">
              {service.nome}
            </h3>
            <p>{service.testo}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Servimg = ({ index }: any) => {
  const imageUrl = `./photo/service${index + 1}.webp`;
  return (
    <div className=" w-full h-56 -mb-16 ">
      <div className="relative w-full h-full ">
        <img
          className="object-cover w-full h-full"
          alt={`./photo/service${index + 1}`}
          src={imageUrl}
        />
      </div>
    </div>
  );
};

const About = ({
  editedText,
  bgcolor,
  detailscolor,
  image
}: any) => {
  return (
    <section
      id="aboutus"
      className="max-w-screen-2xl mx-auto  flex flex-col-reverse md:flex-row items-center justify-center gap-8"
    >
      <div className="w-full flex  relative order-2 md:order-1">
        <img
          className="h-[50vh] ml-4 md:ml-0 object-cover md:w-[50vw] w-[80vw]"
          alt="main"
          src={"./photo/about.webp"}
        />
      </div>
      <div className="md:w-full border flex  md:-ml-20 flex-col -mt-20 md:mt-10 justify-center p-4 gap-2 order-1 md:order-2  w-3/4  -mb-20 z-10 " style={{ borderColor: detailscolor, background:bgcolor }}>
        <h1 className="text-4xl">
          <p className="p-1">{editedText.title}</p>
        </h1>
        <p className="text-lg">
          {editedText.text}
        </p>
      </div>
    </section>
  );
};

const Review = ({ editedText }: any) => {
  return (
    <section
      id="review"
      className="max-w-screen-2xl mx-auto w-full my-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-8 "
    >
      {editedText.map((review: any, index: any) => (
        <div
          className={`w-full flex flex-col justify-between border p-4  gap-4 ${
            index === 2 ? "md:col-auto sm:col-span-full" : ""
          }`}
          key={index}
        >
          <p>{review.text}</p>
          <div className="ml-auto justify-end flex items-center gap-4">
            <p>{review.nome}</p>
            <img
              className="h-8 w-8 rounded-full"
              src={`./photo/review${index+1}.webp`}
              alt={`review ${index}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

const Cta = ({ editedText, buttoncolor, btn }:any) => {
  return (
    <section
      id="cta"
      className="my-20  flex flex-col items-center justify-center"
    >
      <div className="flex flex-col ">
        <h1 className="max-w-screen-md text-center p-4 text-2xl">{editedText}</h1>

        <Button buttoncolor={buttoncolor} btn={btn} />
      </div>
    </section>
  );
};
const Footer = ({ editedText,social,textcolor }: any) => {
  return (
    <section className="p-8 flex flex-col justify-center border-t border-gray-200 w-full gap-4">
      <Social social={social} textcolor={textcolor}/>
      
      <div className="flex flex-row justify-center gap-4">
        
        <a href="#header"><p>{editedText.home}</p></a>
      <a href="#aboutus"><p>{editedText.about}</p></a>
      <a href="#servizi"><p>{editedText.servizi}</p></a>
        
      </div>
      <div className="flex relative bottom-0 h-14 items-center justify-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 9C10 8.44754 10.4476 8 10.9997 8H13C13.5071 8 13.7898 8.16249 13.9378 8.28087C14.0486 8.36952 14.1077 8.45538 14.119 8.4731C14.3737 8.94812 14.962 9.13706 15.4472 8.89443C15.9309 8.65259 16.1361 8.03372 15.8934 7.55064C15.8387 7.44229 15.7712 7.34071 15.6984 7.24375C15.5859 7.09376 15.4194 6.90487 15.1872 6.71913C14.7102 6.33751 13.9929 6 13 6H10.9997C9.34271 6 8 7.34332 8 9V14.9999C8 16.6566 9.34275 17.9999 10.9998 17.9999L13 17.9999C13.9929 18 14.7101 17.6625 15.1872 17.2809C15.4194 17.0951 15.5859 16.9062 15.6984 16.7563C15.7714 16.659 15.8389 16.5568 15.8939 16.4483C16.138 15.9605 15.9354 15.3497 15.4472 15.1056C14.962 14.8629 14.3737 15.0519 14.119 15.5269C14.1077 15.5446 14.0486 15.6305 13.9378 15.7191C13.7899 15.8375 13.5071 16 13 15.9999L10.9998 15.9999C10.4476 15.9999 10 15.5524 10 14.9999V9Z"
            fill="#0F0F0F"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
            fill="#0F0F0F"
          ></path>
        </svg>
        <p>{editedText.azienda}</p>
      </div>
    </section>
  );
};

export default App3;
