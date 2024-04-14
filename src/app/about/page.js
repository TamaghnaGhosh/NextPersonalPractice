"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleButton = (name) => {
    router.push(name);
  };
  return (
    <>
      <div className="items-center text-center">
        <h1 className="text-4xl">About Page</h1>
        <Link href="/about/aboutstudents">aboutstudents</Link>
        <br />
        <br />
        <Link href="/about/aboutcollege">aboutcollege</Link>
        <br />
        <br />
        <button
          className="bg-slate-500 rounded-md text-white w-36 h-10"
          onClick={() => handleButton("/about/aboutcollege")}
        >
          aboutcollege
        </button>
        <br />
        <br />
        <button
          className="bg-slate-500 rounded-md text-white w-36 h-10"
          onClick={() => handleButton("/about/aboutstudents")}
        >
          aboutstudents
        </button>
        <br />
        <br />
        <button
          className="bg-slate-500 rounded-md text-white w-24 h-10"
          onClick={() => handleButton("/")}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default About;
