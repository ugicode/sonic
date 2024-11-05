import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Features from "../Features";
import Colors from "./ProductColors";
import SectionTitle from "../Common/SectionTitle";

const ProductDetail = ({ data, colorData }) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[350px] text-center"
              data-wow-delay=".15s"
            >
              <Image
                src={data.image_url}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {data.title}
                </h3>
                <p
                  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: data[`description_${locale}`],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle
          title={`${data.title} ${t("Products.color")}`}
          paragraph=""
          center
        />

        <Colors colorData={colorData} />
      </div>
    </section>
  );
};
export default ProductDetail;
