import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CONTS } from "~/constants/common";
import openseaLogo from "~/images/opensea.svg";

const style = {
  wrapper: "bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex items-center z-10",
  logoContainer: "flex items-center cursor-pointer",
  logoText: " ml-[0.8rem] text-white font-semibold text-xl",
  searchBar: "flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]",
  searchIcon: "text-[#8a939b] mx-3 font-bold text-lg",
  searchInput: "h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]",
  headerItems: "flex items-center justify-end",
  headerItem: "hidden px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer lg:inline-block",
  headerIcon: "hidden text-[#8a939b] text-3xl px-4 hover:text-white cursor-pointer md:inline-block",
  hamburgerIcon: "flex text-2xl md:ml-4 stroke-current lg:hidden cursor-pointer text-[#8a939b]"
};

type Props = {
  isBackdropOpen?: boolean;
  toggleBackdrop?: () => void;
}

const Navbar = ({ isBackdropOpen, toggleBackdrop }: Props) => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openseaLogo} width={40} height={40}/>
          <div className={style.logoText}>{CONTS.LOGO_NAME}</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          type="text"
          placeholder={CONTS.PLACEHOLDER_INPUT}
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/Collection/1234">
          <div className={style.headerItem}>{CONTS.HEADER_ITEMS.COLLECTIONS}</div>
        </Link>
        <div className={style.headerItem}>{CONTS.HEADER_ITEMS.STATS}</div>
        <div className={style.headerItem}>{CONTS.HEADER_ITEMS.RESOURCES}</div>
        <div className={style.headerItem}>{CONTS.HEADER_ITEMS.CREATE}</div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
      <div
        className={style.hamburgerIcon}
        onClick={toggleBackdrop}
      >
      {isBackdropOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;