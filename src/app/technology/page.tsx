import Career from "@/components/Career/Detail";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Products from "@/components/Products";
import TechnologySection from "@/components/Technology";
import TechnologyDetail from "@/components/Technology/Detail";
import { supabase } from "@/services/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const fetchData = async () => {
  try {
    const { data, error } = await supabase.from("technology_pages").select();

    return data;
  } catch (error) {
    return [];
  }
};
const fetchProducts = async () => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    return data;
  } catch (error) {
    return [];
  }
};
const TechnologyPage = async () => {
  const data = await fetchData();
  const productData = await fetchProducts();

  return (
    <>
      <Breadcrumb pageName="technology" description="" />
      <TechnologyDetail data={data} />
      <Products data={productData} />
    </>
  );
};

export default TechnologyPage;
