"use client";
import Link from "next/link";
import SampleCss from "../SampleCss/page";

const HomePage = () => {
  const handleButton = () => {
    alert("handleButton");
  };

  const arrayOfLinks = [
    { link: "/login", elem: "Login" },
    { link: "/about", elem: "About" },
    { link: "/studentlist", elem: "Studentlist" },
    { link: "/study", elem: "Study" },
    { link: "/clientapiproductlist", elem: "Productlist-Client" },
    { link: "/serverapiproductlist", elem: "Productlist-Server" },
    { link: "/usermetadata", elem: "User-Metadata" },
    { link: "/uselocation", elem: "User-Location" },
    { link: "/redirectpage", elem: "Redirect-page" },
  ];
  return (
    <>
      <button
        className="bg-slate-500 rounded-md text-white w-24 h-10"
        onClick={() => handleButton()}
      >
        Click me
      </button>

      <ChildrenSeaction fullName="Tamaghna" lastName="Ghosh" />
      {/* {ChildrenSeaction({ fullName: "Tamaghna", lastName: "Ghosh" })} */}
      {arrayOfLinks.map((item) => (
        <Link key={item} href={item.link}>
          {item.elem}
        </Link>
      ))}
      <SampleCss />
    </>
  );
};
export default HomePage;

const ChildrenSeaction = (props) => {
  return <h1>ChildrenSeaction</h1>;
};
