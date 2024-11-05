import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ProductCart = ({ item }) => {
  const t = useTranslations();
  return (
    <div className="borrder-t-2 relative my-10 mr-4 cursor-pointer border border-[#E8E8E8] px-3 py-6 text-center hover:shadow-2xl">
      <Image
        src={item.image_url}
        height={214}
        width={214}
        className="mx-auto mb-4"
        alt=""
      />
      <h2 className="text-xl font-bold">{item.title}</h2>
      <Link
        href={`/products/${item.slug}`}
        className="mt-6 inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
      >
        {t("button.review")}
      </Link>
    </div>
  );
};
export default ProductCart;
