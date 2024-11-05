"use client";
import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { PauseCircle, PlayCircle } from "@phosphor-icons/react";
import AboutSectionOne from "./AboutSectionOne";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const AboutDetail = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-10 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <SectionTitle
                  title={data[`company_name_${locale}`]}
                  paragraph={data[`short_description_${locale}`]}
                  mb="44px"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-10 text-center" data-wow-delay=".15s">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                className="h-full w-full rounded-xl object-cover"
                onClick={handlePlayPause}
              >
                <source src={data.video_url} type="video/mp4" />
              </video>
              {!isPlaying ? (
                <button
                  className="absolute  right-3 top-3 flex h-16 w-16 items-center justify-center rounded-full bg-black bg-opacity-50 text-xl text-white"
                  onClick={handlePlayPause}
                >
                  <PlayCircle size={34} color="white" />
                </button>
              ) : (
                <button
                  className="absolute  right-3 top-3 flex h-16 w-16 items-center justify-center rounded-full bg-black bg-opacity-50 text-xl text-white"
                  onClick={handlePlayPause}
                >
                  <PauseCircle size={34} color="white" />
                </button>
              )}
            </div>
          </div>
        </div>
        <p
          className="mt-10  text-base font-medium leading-relaxed text-body-color sm:leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: data[`description_${locale}`],
          }}
        ></p>

        <div className="border-b border-body-color/[.15] pb-16 pt-10 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="relative mx-auto mb-20 aspect-[25/24]  w-1/4 ">
            <Image
              src="/images/about/home-image-1.webp"
              alt="about-image"
              fill
              className="mx-auto max-w-[300] drop-shadow-three dark:hidden dark:drop-shadow-none"
            />
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <SectionTitle
                title={t("About.mission")}
                paragraph={data[`mission_${locale}`]}
                mb="44px"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <SectionTitle
                title={t("About.vision")}
                paragraph={data[`vision_${locale}`]}
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
