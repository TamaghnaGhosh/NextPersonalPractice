"use client"
import Link from "next/link";

const HomePage = () => {
  const handleButton = () => {
    alert("handleButton");
  };
  return (
    <>
      <button className="bg-slate-500 rounded-md text-white w-24 h-10" onClick={() => handleButton()}>
        Click me
      </button>
      <ChildrenSeaction fullName="Tamaghna" lastName="Ghosh" />
      {/* {ChildrenSeaction({ fullName: "Tamaghna", lastName: "Ghosh" })} */}

      <Link href={"/login"}>Login</Link>
      <Link href={"/about"}>About</Link>
    </>
  );
};
export default HomePage;

const ChildrenSeaction = (props) => {
  return <h1>ChildrenSeaction</h1>;
};
