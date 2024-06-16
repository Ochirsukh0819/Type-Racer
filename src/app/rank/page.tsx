import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import React from "react";

function Rank() {
  return (
    <section className="w-full flex flex-col">
      <Navbar />
      <div className="flex justify-center">
        <div className="mt-10 w-[80%]">
          <Table />
        </div>
      </div>
    </section>
  );
}

export default Rank;
