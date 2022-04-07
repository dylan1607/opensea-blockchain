import type { NextPage } from "next";
import { useState } from "react";
import Backdrop from "~/components/Backdrop";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar
        isBackdropOpen={sideToggle}
        toggleBackdrop={() => setSideToggle(!sideToggle)}
      />
      <Backdrop showBackdrop={sideToggle} />
      <Hero />
    </div>
    );
};

export default Home;