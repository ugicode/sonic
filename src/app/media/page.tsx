import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { supabase } from "@/services/supabase";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import DetailBlog from "@/components/Blog/DetailBlog";
import SingleBlog from "@/components/Blog/SingleBlog";

export const metadata: Metadata = {
  title: "Blog Details Page ",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const fetchMedia = async () => {
  try {
    const { data, error } = await supabase.from("media").select("*");

    return data;
  } catch (error) {
    return [];
  }
};

const MediaPafe = async () => {
  const data = await fetchMedia();

  return (
    <>
      <Breadcrumb pageName="media" description="" />
      <section className="py-8 md:py-10 lg:py-14">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data.map((blog) => (
              <div
                key={blog.id}
                className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaPafe;
