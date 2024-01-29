import Link from "next/link";
import React from "react";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
         
          <textarea placeholder="write a comment..." className="p-[20px] w-full outline"></textarea>


          <button className="py-[16px] px-[20px] bg-gray-400 text-white font-bold border-none rounded-md cursor-pointer"> Send</button>
        
        </div>
      ) : (
        <Link href="/login"> Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        <div className="">

        </div>
        <div className="flex items-center gap-[20px] mb-[20px] ">
          <Image
            src="/food.png"
            className="object-cover"
            height={50}
            width={50}
            alt="food"
          />
          <div className="flex flex-col gap-[5px] text-base">
            <span>John Doe</span>
            <span>01.01.2021</span>
          </div>
          <p className="text-base text-[#718096]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            reprehenderit dolor! Fuga repellendus maxime vel cumque consectetur
            sequi nihil aperiam perferendis reiciendis atque ad eligendi a
            facere saepe nisi, similique, error facilis modi quia velit? Ipsum
            voluptate laborum tempore architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

{
  /* .container {
  margin-top: 50px;
}

.title {
  color: var(--softTextColor);
  margin-bottom: 30px;
}

.write {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.input {
  padding: 20px;
  width: 100%;
}

.button {
  padding: 16px 20px;
  background-color: teal;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comments{
  margin-top: 50px;
}

.comment{
  margin-bottom: 50px;
}

.user {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.image {
  border-radius: 50%;
  object-fit: cover;
}

.userInfo {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--softTextColor);
}

.username {
  font-weight: 500;
}

.date{
  font-size: 14px;
}

.desc{
  font-size: 18px;
  font-weight: 300;
} */
}
