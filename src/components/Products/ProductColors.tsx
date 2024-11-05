import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Colors = ({ colorData }) => {
  return (
    <>
      <section id="features" className="">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
            {colorData.map((item, a) => (
              <>
                <div className="relative mr-4 cursor-pointer rounded-md border border-[#E8E8E8] px-3 py-6 text-center hover:shadow-2xl">
                  <Image
                    src={item.image_url}
                    height={214}
                    width={214}
                    className="mx-auto mb-4"
                    alt=""
                  />
                  <h2 className="text-xl font-bold">{item.color_name}</h2>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Colors;
