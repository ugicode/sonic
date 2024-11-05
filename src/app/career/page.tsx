import Career from "@/components/Career/Detail";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { supabase } from "@/services/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const fetchSectionData = async () => {
  try {
    const { data, error } = await supabase
      .from("home-page-sections")
      .select()
      .eq("slug", "Career")
      .single();

    return data;
  } catch (error) {
    return [];
  }
};

const ContactPage = async () => {
  const data = await fetchSectionData();

  return (
    <>
      <Breadcrumb pageName="career" description="" />

      <Career data={data} />
    </>
  );
};

export default ContactPage;
