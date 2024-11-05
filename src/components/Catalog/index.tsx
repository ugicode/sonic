import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const CatalogSection = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[450px] text-center "
              data-wow-delay=".15s"
            >
              <Image
                src="/images/katalog.png"
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
                  {data[`title_${locale}`]}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {data[`description_${locale}`]}
                </p>
                <Link
                  href="https://djagkyjgxnsxmtowtczk.supabase.co/storage/v1/object/sign/catalog/company-profile_EN_2024.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXRhbG9nL2NvbXBhbnktcHJvZmlsZV9FTl8yMDI0LnBkZiIsImlhdCI6MTczMDc5MzYyNywiZXhwIjoyMDQ2MTUzNjI3fQ.65bXnT3IukiVExKqSm232mUrMZZWGnWZiWAlSA954xU&t=2024-11-05T08%3A00%3A27.670Z"
                  target="_blank"
                  className="mt-10 inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  {t("button.review")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
