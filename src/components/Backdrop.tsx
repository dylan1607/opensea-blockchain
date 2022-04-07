import { FaRegCompass } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import MenuItem from "./common/MenuItem";

type Props = {
  showBackdrop: boolean;
}

const Backdrop = ({ showBackdrop }: Props) => {
  const style = {
      wrapper: `flex flex-col w-screen h-screen fixed z-5 bg-[#303339]
        pt-4 transition-all ease-in-out duration-200
        ${showBackdrop ? "translate-x-0" : "translate-x-full"}`,
  };
  return (
     <div className={style.wrapper}>
      <MenuItem title="Explore" prefix={<FaRegCompass />} />
      <MenuItem title="Stats" prefix={<IoMdStats />} />
      <MenuItem title="Resources" prefix={<BiNews />} />
     </div>
  );
};

export default Backdrop;