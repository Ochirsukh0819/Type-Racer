import Navbar from "@/components/Navbar";
import TimeLimitedMode from "@/components/TimeLimitedMode";
import React from "react";

function page() {
  return (
    <section>
      <Navbar />
      <section>
        <TimeLimitedMode />
      </section>
    </section>
  );
}

export default page;
