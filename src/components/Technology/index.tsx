import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const TechnologySection = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();
  const pageData = data.filter((i) => i.parent_id === null)[0];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="bg-blue">
        <div className="container">
          <div className=" flex flex-wrap gap-6 lg:gap-20">
            <div className="w-full flex-1 px-4 py-10 lg:w-1/2 lg:py-28">
              <div className="">
                <div className="mb-9">
                  <h2 className="mb-4 text-3xl font-bold text-white dark:text-white sm:text-2xl lg:text-2xl xl:text-4xl">
                    {pageData[`title_${locale}`]}
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-white sm:text-base sm:leading-relaxed">
                    {pageData[`description_${locale}`]}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full px-4  lg:w-1/2">
              <div className=" -top-16  left-0 grid w-full grid-cols-1 content-start gap-6 md:grid-cols-2 lg:absolute">
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
                      <p className="text-md">{item[`description_${locale}`]}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
