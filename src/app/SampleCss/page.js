/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import custom from "../custom.module.css";
import customid from "../customId.module.css";
import vercel from "../../../public/vercel.svg";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "100px",
//   subsets: ["latin"],
//   display: "swap",
// });

const SampleCss = () => {
  const { main } = customid;

  return (
    <div>
      <h1 className={"font-semibold text-4xl " + custom.main}>
        custom.module.css
      </h1>
      <h1 className={"font-semibold text-4xl"} id={main}>
        custom.module.css
      </h1>
      <Image src={vercel} width={500} height={500} />
      <Image
        src={
          "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        }
        width={800}
        height={800}
      />
      {/* <h1 className={roboto.className}>Font with Next js</h1> */}
      {/* <image src={vercel.src} /> */}
    </div>
  );
};
export default SampleCss;
