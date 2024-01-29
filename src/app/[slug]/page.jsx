import Menu from "@/components/Menu";
import React from "react";
import Image from "next/image";
import Comments from "@/components/Comments";

const SinglePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col mt-12">
        <div className="w-full h-[500px] relative">
          <Image
            src="/blog.png"
            className="object-cover rounded-md"
            fill
            alt="blog"
          />
        </div>

        <div className="flex w-full justify-between items-center">
          <span className="text-sm flex justify-end italic font-light">
            Joe Doe - 11.02.2023{" "}
          </span>
          <span className="text-sm flex justify-end italic font-light border-b border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </span>
        </div>
      </div>

      <div className="flex gap-[50px]">
        <div className="flex-[5] ">
          <div className="font-normal mb-[20px] gap-1 flex flex-col ">
            <p className="text-base text-[#718096]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consequuntur, aut incidunt alias inventore, eaque optio sequi,
              quam perferendis placeat qui ipsa voluptates eligendi recusandae!
              Molestiae sequi repudiandae illum aut?
            </p>
            <h1></h1>
            <p className="text-base text-[#718096]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              asperiores, molestiae culpa modi rerum tenetur dolore vel quaerat
              animi libero sequi reprehenderit perferendis quibusdam earum ipsam
              cumque necessitatibus magnam, praesentium, vitae blanditiis dolor
              incidunt? Minus ab nobis optio a laudantium!
            </p>
          </div>

          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
