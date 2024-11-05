import { Blog } from "@/types/blog";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const DetailBlog = ({ data }) => {
  const locale = useLocale();

  return (
    <>
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              {data[`title_${locale}`]}
            </h2>

            <div>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={data.image}
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[`paragraph_${locale}`],
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlog;
