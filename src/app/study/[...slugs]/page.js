"use client";
import Link from "next/link";

const Study = ({ params }) => {
  console.log("🚀 ~ Study ~ params:", params.slugs)
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">Study page Dynamic ...</h1>
      <br></br>
      <Link href="/study">Go to Study page</Link>
    </div>
  );
};

export default Study;
