import InfiniteMode from "@/components/InfiniteMode";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <section>
      <Navbar />
      <section>
        <InfiniteMode />
      </section>
    </section>
  );
}

export default page;
