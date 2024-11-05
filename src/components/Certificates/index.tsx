"use client";
import { useEffect } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Certificates = ({ data }) => {
  const images = data.map((item) => ({
    ...item,
    src: item.image_url,
  }));

  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-14">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap items-center">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              {images.map((image, key) => (
                <a
                  key={key}
                  href={image.src}
                  className="rounded-xl border p-3 shadow-lg"
                >
                  <Image alt="" width={250} height={250} src={image.src} />
                </a>
              ))}
            </LightGallery>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
