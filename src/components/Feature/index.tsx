import React from "react";
import Image from "next/image";
import TypingMain from "@/assets/typingman.webp";
import Statistic from "@/assets/statisticicon.webp";
import LeaderShiip from "@/assets/leaderboardicon.webp";
import TypeRacing from "@/assets/typeracingicon.webp";
import Information from "../Information";

function Feature() {
  return (
    <section className="w-full flex lg:flex-row flex-col items-center lg:px-24 gap-10 ">
      <div className="lg:w-[50%] sm:w-[70%] w-[85%]">
        <Image src={TypingMain} alt="typingman" className="" />
      </div>
      <div className="lg:w-[50%] w-[80%]">
        <h2 className="lg:text-[42px] sm:text-[30px] text-[24px] font-semibold text-center">
          Check out our features
        </h2>
        <div className="flex flex-col gap-2">
          <Information
            imageName={TypeRacing}
            title="Type racing"
            text="Хурдан бичих чадвараа туршиж үзээрэй"
          />
          <Information
            imageName={LeaderShiip}
            title="Leaderboard"
            text="Оргилд гарч, шилдэг бичээч болоорой"
          />
          <Information
            imageName={Statistic}
            title="User statistics"
            text="Бичих ур чадварынхаа статистик мэдээллийг хуваалцаарай"
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
