"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <>
      <div className="text-center items-center bg-gray-200">
        <h1 className="text-4xl">Layout Page for Login</h1>
        {pathName !== "/login/loginteachers" ? (
          <ul>
            <li>
              <Link href="/login/loginstudents">Login students</Link>
            </li>
            <li>
              <Link href="/login/loginteachers">Login teachers</Link>
            </li>
          </ul>
        ) : (
          <Link href="/login">BackToLogin</Link>
        )}
        {children}
      </div>
    </>
  );
}
