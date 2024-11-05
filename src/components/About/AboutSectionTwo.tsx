"use client";
import { PauseCircle, PlayCircle } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRef, useState } from "react";

const AboutSectionTwo = ({ data }) => {
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
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-10 text-center" data-wow-delay=".15s">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                poster={data.image_url} // Replace with your image URL
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
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {data[`title_${locale}`]}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {data[`description_${locale}`]}
                </p>
                <Link
                  href="/about"
                  className="mt-10 inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  {t("button.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
