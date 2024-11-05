import AboutDetail from "@/components/About/AboutDetail";
import { supabase } from "@/services/supabase";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import CareerSection from "@/components/Career";

export const metadata: Metadata = {
  title: "About Page ",
  description: "",
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
const fetchCareerData = async () => {
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
const AboutPage = async () => {
  const data = await fetchSectionData();
  const careerData = await fetchCareerData();

  return (
    <>
      <Breadcrumb
        pageName="about"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutDetail data={data} />
      <CareerSection data={careerData} />
    </>
  );
};

export default AboutPage;
