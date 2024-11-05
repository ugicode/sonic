"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { PauseCircle, PlayCircle } from "@phosphor-icons/react";

const TechnologyDetail = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();
  const pageData = data.filter((i) => i.parent_id === null)[0];
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
    <section className="pt-8 md:pt-10 lg:pt-14">
      <div className="">
        <div className="container">
          <div className=" flex  flex-wrap gap-6 lg:gap-20">
            <div className="w-full flex-1 px-4 lg:w-5/6 ">
              <div className="">
                <div className="mb-9">
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-black sm:text-2xl lg:text-2xl xl:text-4xl">
                    {pageData[`title_${locale}`]}
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-black sm:text-base sm:leading-relaxed">
                    {pageData[`description_${locale}`]}
                  </p>
                </div>
                <div className="relative w-full ">
                  <div className="  grid w-full grid-cols-1 content-start gap-6 md:grid-cols-2">
                    {data
                      .filter((i) => i.parent_id !== null)
                      .map((item, key) => (
                        <div
                          key={key}
                          className={`border-gray border bg-white p-6 text-center shadow-2xl ${
                            key % 2 === 0 ? "lg:mb-10" : "lg:mt-10"
                          }`}
                        >
                          <div className="mb-6 flex items-center justify-center">
                            <Image
                              src={item.icon_url}
                              alt="about image"
                              height={56}
                              width={70}
                              className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                            />
                          </div>
                          <h5 className="mb-3 text-2xl font-bold text-[#00375E]">
                            {item[`title_${locale}`]}
                          </h5>
                          <p className="text-md">
                            {item[`description_${locale}`]}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full px-4  lg:w-2/6">
              <div className="relative text-center" data-wow-delay=".15s">
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  className="h-full w-full rounded-xl object-cover"
                  onClick={handlePlayPause}
                >
                  <source src={pageData.video_url} type="video/mp4" />
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
        </div>
      </div>
    </section>
  );
};

export default TechnologyDetail;
