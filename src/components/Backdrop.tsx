import { FaRegCompass } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import MenuItem from "./common/MenuItem";
import { CONTS } from "~/constants/common";

type Props = {
  showBackdrop: boolean;
}

const Backdrop = ({ showBackdrop }: Props) => {
  const style = {
      wrapper: `flex flex-col w-screen h-screen fixed z-10 bg-[#303339]
        pt-4 transition-all ease-in-out duration-200
        ${showBackdrop ? "translate-x-0" : "translate-x-full"}`,
  };
  return (
     <div className={style.wrapper}>
      <MenuItem title={CONTS.HEADER_ITEMS.EXPLORE} prefix={<FaRegCompass />} />
      <MenuItem title={CONTS.HEADER_ITEMS.STATS} prefix={<IoMdStats />} />
      <MenuItem title={CONTS.HEADER_ITEMS.RESOURCES} prefix={<BiNews />} />
     </div>
  );
};

export default Backdrop;