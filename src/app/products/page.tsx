import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCart from "@/components/Products/ProductCard";
import { supabase } from "@/services/supabase";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "",
  // other metadata
};

const fetchProducts = async () => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    return data;
  } catch (error) {
    return [];
  }
};

const ProductsPage = async () => {
  const data = await fetchProducts();

  return (
    <>
      <Breadcrumb
        pageName="products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div className="container">
        <div className="grid grid-cols-1 gap-x-8  md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {data.map((item, key) => (
            <ProductCart item={item} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
