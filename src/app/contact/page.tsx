import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
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
      .from("company-info")
      .select()
      .eq("id", 1)
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
      <Breadcrumb
        pageName="contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact data={data} />
    </>
  );
};

export default ContactPage;
