import React from "react";
import Button from "../Button";
import Feature from "../Feature";
import Link from "next/link";

function Main() {
  return (
    <section className="w-full bg-[#3a3845] flex flex-col items-center">
      <section className="lg:w-[85%] w-[95%] lg:px-24 sm:px-16 px-2 py-10 grid grid-cols-2 gap-6 justify-center">
        {" "}
        <section className=" bg-white text-[#3A3845] py-2 md:px-24 px-6 flex flex-col gap-4 rounded-sm  col-span-2 ">
          <div>
            <h2 className="lg:text-[42px]  md:text-[30px] text-[24px]  font-semibold text-center">
              Өөрийн хурд, нарийвчлалыг шинэ өндөрлөгт дээшлүүлээрэй
            </h2>
          </div>
          <p className="text-sm font-semibold leading-8 text-center">
            Манай вэб сайт бол таны шивэх урлагийг урьд өмнөхөөсөө илүү хурдан
            эзэмших цэг юм. Та оюутан ч бай, мэргэжлийн хүн ч бай, эсвэл зүгээр
            л бичих чадвараа сайжруулахыг зорьж байгаа эсэхээс үл хамааран бид
            танд өөрийн чадавхийг бүрэн дүүрэн нээхэд тань туслахад бэлэн байна.
          </p>
        </section>
        <section className=" bg-white text-[#3A3845] py-2  flex flex-col gap-1 rounded-sm ">
          <div>
            <h2 className="md:text-xl text-[1.2rem] font-semibold text-center">
              Цагтай уралд
            </h2>
          </div>
          <p className="text-sm font-semibold leading-8 text-center">
            Цагтай уралдаж байхдаа бичих хурдаа нэмэгдүүлээрэй!
          </p>
          <Link href="/time-limited-mode">
            {" "}
            <div className="flex items-center justify-center ">
              <Button buttonName="Тоглох" buttonType="button" />
            </div>
          </Link>
        </section>
        <section className=" bg-white text-[#3A3845] py-2  flex flex-col gap-2 rounded-sm ">
          <div>
            <h2 className="md:text-xl  text-[1.2rem] font-semibold text-center">
              Хязгааргүй бичих тест
            </h2>
          </div>
          <p className="text-sm font-semibold leading-8 text-center">
            Бичих чадвараа бие даан сайжруул!
          </p>
          <Link href="/infinitemode">
            <div className="flex items-center justify-center ">
              <Button buttonName="Тоглох" buttonType="button" />
            </div>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Main;
