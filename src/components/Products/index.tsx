"use client";
import React, { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import ProductCart from "./ProductCard";
import { AlignLeft, CaretLeft, CaretRight } from "@phosphor-icons/react";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

const Products = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();

  const slideRef = useRef<SlideshowRef>(null);
  return (
    <>
      <section id="products" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t("HomePage.productTitle")}
            paragraph=""
            center
          />
          <Slide
            slidesToScroll={1}
            slidesToShow={4}
            indicators={false}
            ref={slideRef}
            infinite
            canSwipe
            responsive={responsiveSettings}
          >
            {data.map((item, key) => (
              <ProductCart item={item} key={key} />
            ))}
          </Slide>

          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              className="flex items-center justify-center p-3 shadow-xl"
              onClick={() => slideRef.current.goBack()}
            >
              <CaretLeft weight="bold" size={24} />
            </button>
            <button
              type="button"
              className="flex items-center justify-center p-3 shadow-xl "
              onClick={() => slideRef.current.goNext()}
            >
              <CaretRight weight="bold" size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
