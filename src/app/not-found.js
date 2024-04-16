import Link from "next/link";

const NotFound = () => {
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">This page is not availabe</h1>
      <Link href="/">Go to main page</Link>
    </div>
  );
};
export default NotFound;
