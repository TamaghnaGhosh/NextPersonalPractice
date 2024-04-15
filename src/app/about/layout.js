import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="text-center items-center bg-gray-200">
        <h1 className="text-4xl">Layout Page for About</h1>
        <ul>
          <li>
            <Link href="/about/aboutstudents">AboutStudent</Link>
          </li>
          <li>
            <Link href="/about/aboutcollege">AboutCollege</Link>
          </li>
          <li>
            <Link href="/about">BackToAbout</Link>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
}
