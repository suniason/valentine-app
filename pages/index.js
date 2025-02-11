import { Beau_Rivage, Great_Vibes, Playfair_Display } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import HeartAnimation from "@/components/Heart";

export const parisienne = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
export const playfairdisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const { scrollY } = useScroll();

  const bgColor = useTransform(
    scrollY,
    [0, 300, 400],
    ["none", "none", "#b71c1c"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 300, 400],
    ["#f44336", "#f44336", "#ffffff"]
  );

  const messageOpacity = useTransform(scrollY, [400, 700], [0, 1]);
  const messageTranslate = useTransform(scrollY, [400, 700], [50, 0]);
  const messageDisplay = useTransform(
    scrollY,
    [0, 400, 500, 700],
    [0, 0, "fit-content", "fit-content"]
  );

  const imageOpacity = useTransform(scrollY, [100, 400], [1, 0]);
  const imageDisplay = useTransform(
    scrollY,
    [100, 399, 400],
    ["block", "block", "none"]
  );
  const imageScale = useTransform(scrollY, [100, 400], [1, 0]);
  const imageSize = useTransform(scrollY, [100, 400], [500, 0]);

  return (
    <div className="w-full h-[250dvh] relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <HeartAnimation />
      </div>

      <motion.div
        style={{
          background: bgColor,
          color: textColor,
        }}
        className="sticky top-0 w-full h-screen flex flex-col justify-center items-center text-center px-5 -z-20  "
      >
        <motion.div
          style={{
            opacity: imageOpacity,
            display: imageDisplay,
            scale: imageScale,
            height: imageSize,
            width: imageSize,
          }}
          className="flex justify-center items-center"
        >
          <motion.img
            src="heart.svg"
            alt="Valentine Heart"
            height={500}
            width={500}
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className={` text-6xl md:text-8xl font-bold z-10 ${parisienne.className}`}
        >
          Happy Valentine&apos;s Day
        </motion.div>
        <motion.hr
          style={{ borderColor: textColor }}
          className="border-2 my-12 w-3/4"
        />

        <motion.div
          style={{
            opacity: messageOpacity,
            y: messageTranslate,
            height: messageDisplay,
          }}
          className={`m-5 text-xl md:text-3xl w-full md:w-3/4 font-semibold ${playfairdisplay.className}`}
        >
          <div className="p-10 rounded-lg ">
            {`Thank you for the months of loving me bii. 
          Hopefully maabtan og years and decades, mayta gali og forever. 
          Kahibaw ko nga naa man gyud usahay mga problema pero malampasan ra na nato.
          I promise you, I will be there to support you always.
          Looking forward to more memories bisan wa ko kaayoy picture.
          `}
          </div>
          <div className="text-3xl md:text-5xl font-bold capitalize p-10">
            {`I love you very much always and forever.❤️`}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
