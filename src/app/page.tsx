import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";

import Products from "@/components/Products";
import Slider from "@/components/Slider";
import TechnologySection from "@/components/Technology";

import { Metadata } from "next";
import Blog from "@/components/Blog";
import CatalogSection from "@/components/Catalog";
import CareerSection from "@/components/Career";

import { supabase } from "@/services/supabase";

export const metadata: Metadata = {
  title: "Sonic Aluminyum",
  description: "-",
};

// Async function to fetch slides
async function fetchSlides() {
  try {
    const { data, error } = await supabase
      .from("sliders")
      .select("*")
      .eq("is_active", true);

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
const fetchSectionData = async () => {
  try {
    const { data, error } = await supabase.from("home-page-sections").select();
    return data;
  } catch (error) {
    return [];
  }
};
const fetchTechnologyPages = async () => {
  try {
    const { data, error } = await supabase.from("technology_pages").select("*");

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
const fetchMedia = async () => {
  try {
    const { data, error } = await supabase.from("media").select("*").limit(3);

    return data;
  } catch (error) {
    return [];
  }
};

export default async function Home() {
  // Fetch slides server-side
  const slides = await fetchSlides();
  const sectionData = await fetchSectionData();
  const technologyPagesData = await fetchTechnologyPages();
  const productsData = await fetchProducts();
  const mediaData = await fetchMedia();

  return (
    <>
      <ScrollUp />
      <Slider slides={slides} /> {/* Pass slides as a prop */}
      <AboutSectionTwo
        data={sectionData.filter((a) => a.slug === "About")[0]}
      />
      <TechnologySection data={technologyPagesData} />
      <Products data={productsData} />
      <Blog data={mediaData} />
      <CatalogSection
        data={sectionData.filter((a) => a.slug === "Catalog")[0]}
      />
      <CareerSection data={sectionData.filter((a) => a.slug === "Career")[0]} />
    </>
  );
}
