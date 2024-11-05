import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductDetail from "@/components/Products/ProductDetail";
import { supabase } from "@/services/supabase";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details Page",
  description: "",
  // other metadata
};

const fetchProducts = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const fetchProductColors = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from("product_colors")
      .select("*")
      .eq("product_slug", slug);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching product colors:", error);
    return [];
  }
};

const ProductsDetailPage = async ({ params }) => {
  const data = await fetchProducts(params.slug);
  const colorsData = await fetchProductColors(params.slug);

  return (
    <>
      <Breadcrumb pageName="products" description="" />
      <ProductDetail data={data} colorData={colorsData} />
    </>
  );
};

export default ProductsDetailPage;
