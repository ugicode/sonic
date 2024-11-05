import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCart from "@/components/Products/ProductCard";
import ProductDetail from "@/components/Products/ProductDetail";
import { supabase } from "@/services/supabase";

import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Page ",
  description: "",
  // other metadata
};

const fetchProducts = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    return data;
  } catch (error) {
    return [];
  }
};
const fetchProductColos = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("product_colors")
      .select("*")
      .eq("product_slug", slug);

    return data;
  } catch (error) {
    return [];
  }
};

const ProductsDetailPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await fetchProducts(slug);
  const colorsData = await fetchProductColos(slug);

  return (
    <>
      <Breadcrumb pageName="products" description="" />
      <ProductDetail data={data} colorData={colorsData} />
    </>
  );
};

export default ProductsDetailPage;
