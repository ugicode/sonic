import Breadcrumb from "@/components/Common/Breadcrumb";

import { supabase } from "@/services/supabase";
import { Metadata } from "next";
import Certificates from "@/components/Certificates";

export const metadata: Metadata = {
  title: "About Page ",
  description: "",
  // other metadata
};

async function fetchData() {
  try {
    const { data, error } = await supabase
      .from("certificates")
      .select("image_url");

    if (error) {
      console.error("Error fetching slides:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching slides:", error);
    return [];
  }
}

export default async function CertificatePage() {
  const data = await fetchData();

  return (
    <>
      <Breadcrumb
        pageName="certificates"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Certificates data={data} />
    </>
  );
}
