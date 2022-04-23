import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Backdrop from "~/components/Backdrop";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import { AppContext } from "~/context";

const Home: NextPage = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const { currentWallet } = useContext(AppContext);

  const notify = ( toastHandler = toast) => {
    toastHandler.success(
      "Wellcome back Anonymous !",
      {
        style: {
          background: "#04111d",
          color: "#fff",
        }
      }
    );
  };

  useEffect(() => {
    if (!currentWallet) return;
    (async () => {
      const response = await axios.post("api/user", {
        walletAddress: currentWallet,
        username: "Unnamed",
      });
      if (response.status === 200) notify();
    })();
  }, [currentWallet]);

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
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