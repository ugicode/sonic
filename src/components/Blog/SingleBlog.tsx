import { Blog } from "@/types/blog";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const locale = useLocale();
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`media/${blog[`slug`]}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={blog.image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`media/${blog[`slug`]}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {blog[`title_${locale}`]}
            </Link>
          </h3>
          <p
            className="limited-text  mb-6 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            dangerouslySetInnerHTML={{
              __html: blog[`paragraph_${locale}`],
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
