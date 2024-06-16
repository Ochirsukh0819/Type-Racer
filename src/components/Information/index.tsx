import React from "react";
import Image from "next/image";
import { InformationType } from "@/type";

function Information({ imageName, title, text }: InformationType) {
  return (
    <article className="flex gap-4 items-center bg-[#3a3845] p-4 text-white mt-1">
      <Image src={imageName} alt="star" className="" />
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Information;
