import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { supabase } from "@/services/supabase";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import DetailBlog from "@/components/Blog/DetailBlog";

export const metadata: Metadata = {
  title: "Blog Details Page ",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const fetchMediaDetail = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .eq("slug", slug)
      .single();

    return data;
  } catch (error) {
    return [];
  }
};

const BlogDetailsPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await fetchMediaDetail(slug);

  return (
    <>
      <Breadcrumb pageName="media" description="" />
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <DetailBlog data={data} />
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
