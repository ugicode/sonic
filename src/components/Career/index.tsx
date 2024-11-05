import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const CareerSection = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
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
                  href="mailto:ik@sonicalu.com"
                  target="_blank"
                  className="mt-10 inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  {t("button.joinUs")}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/25] max-w-[450px] text-center "
              data-wow-delay=".15s"
            >
              <Image
                src="/images/career.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
