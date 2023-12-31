import Menu from "@/components/Menu";
import React from "react";
import Image from "next/image";
import Comments from "@/components/Comments";

const SinglePage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-[50px]">
        <div className="flex-[1]">
          <h1 className="mb-[50px] text-[64px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/food.png"
                className="object-cover rounded-md"
                fill
                alt="food"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[20px] font-medium">John Doe</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex-[1] h-[350px] relative">
          <Image
            src="/food.png"
            className="object-cover rounded-md"
            fill
            alt="food"
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-[60px]">
          <div className="text-[20px] font-normal mb-[20px] ">

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            consequuntur, aut incidunt alias inventore, eaque optio sequi, quam
            perferendis placeat qui ipsa voluptates eligendi recusandae!
            Molestiae sequi repudiandae illum aut?
          </p>
          <h1></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores, molestiae culpa modi rerum tenetur dolore vel quaerat animi libero sequi reprehenderit perferendis 
            quibusdam earum ipsam cumque necessitatibus magnam, praesentium, vitae blanditiis dolor incidunt? Minus ab nobis optio a laudantium!</p>
          </div>
          <div>
          <Comments/>
          </div>

        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
