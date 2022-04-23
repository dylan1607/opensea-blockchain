import Image from "next/image";
import { CONTS } from "~/constants/common";
import heroImage from "~/images/heroBanner.png";
import avatar from "~/images/avatar.png";
import { BiInfoCircle } from "react-icons/bi";

const style = {
  wrapper: "relative h-full",
  container: "before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-hero before:bg-cover before:bg-center before:opacity-50 before:blur",
  contentWrapper: "flex flex-wrap relative justify-center items-center m-4",
  copyContainer: "text-center max-w-sm p-4 lg md:text-left",
  title: "relative text-white text-[46px] font-semibold",
  description: "text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]",
  ctaContainer: "flex",
  accentedButton: "relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer",
  button: "relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer",
  cardContainer: "flex flex-col rounded-[3rem] m-6 w-[256px] sm:w-[400px]",
  infoContainer: "h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white",
  author: "flex flex-col justify-center ml-4",
  name: "",
  infoIcon: "flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold",
};

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              {CONTS.HERO_TITLE}
            </div>
            <div className={style.description} >{CONTS.HERO_DESCRIPTION}</div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>
                {CONTS.HEADER_ITEMS.EXPLORE}
              </button>
              <button className={style.button}>
                {CONTS.HEADER_ITEMS.CREATE}
              </button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <Image src={heroImage} alt="random" className="rounded-t-lg" layout="responsive"/>
            <div className={style.infoContainer}>
              <Image
                src={avatar} 
                className="rounded-full"
                height={40}
                width={40} 
              />
              <div className={style.author}>
                <div className={style.name}>Dylan</div>
                <a
                  className="text-[#1868b7]"
                  href="https://github.com/dylan1607"
                >
                  dylantran
                </a>
              </div>
              <div className={style.infoIcon}>
                <BiInfoCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;