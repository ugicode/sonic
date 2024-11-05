"use client";

import { CaretLeft } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const properties = {
  prevArrow: (
    <button className="ml-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-white text-center">
      <CaretLeft weight="bold" size={24} color="white" />
    </button>
  ),
  nextArrow: (
    <button className="mr-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-white">
      <CaretRight weight="bold" size={24} color="white" />
    </button>
  ),
  indicators: false,
};
const Slideshow = ({ slides = [] }) => {
  const t = useTranslations();
  const locale = useLocale();
  // Varsayılan değeri [] olarak ayarla
  return (
    <div className="slide-container relative">
      {
        <Zoom
          scale={1.2}
          canSwipe
          autoplay
          easing="cubic-out"
          indicators={true}
          {...properties}
          infinite
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <Image
                alt={slide.title || "Slider image"}
                src={slide.img_url}
                layout="responsive"
                width={800}
                height={600}
                quality={90}
                priority={index === 0}
              />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-transparent to-transparent text-3xl text-white">
                <div className="text-center">
                  <h2 className="mb-3 text-5xl font-bold tracking-widest">
                    {slide[`title_${locale}`]}
                  </h2>
                  <h6 className="text-4xl tracking-widest">
                    {slide[`sub_title_${locale}`]}
                  </h6>
                  {slide[`button_text_${locale}`] && (
                    <a
                      href={slide.button_link}
                      target={slide.link_target}
                      rel={
                        slide.link_target === "_blank"
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="mt-10 inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {slide[`button_text_${locale}`]}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Zoom>
      }
    </div>
  );
};

export default Slideshow;
