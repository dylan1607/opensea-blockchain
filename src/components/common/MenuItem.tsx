import { GrFormNext } from "react-icons/gr";

const style = {
  wrapper: "flex justify-between items-center w-full px-[1.2rem] py-[0.8rem] text-[#c8cacd] hover:text-white cursor-pointer",
  itemContainer: "flex items-center",
  itemTitle: "font-bold",
  iconItem: "text-3xl mr-4 ",
};

type Props = {
  title: string;
  prefix: React.ReactNode;
}
const MenuItem = ({ title, prefix }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.itemContainer}>
        <div className={style.iconItem}>
          {prefix}
        </div>
        <div className={style.itemTitle}>{title}</div>
      </div>
      <div className={style.iconItem}>
        <GrFormNext />
      </div>
    </div>
  );
};

export default MenuItem;