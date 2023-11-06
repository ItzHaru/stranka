"use client";

import { HiUser } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="bg-slate-50 min-h-screen text-black">
      <header>
        <nav>
          <ul className="flex relative items-stretch text-white text-xl border-b bg-[#635985aa]">
            <li className="mr-auto">
              <Link href="/">
                <img className="w-28" src="/images/sspu.png" alt="sspu" />
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`${
                  pathname === "/" ? "bg-[#443C68aa]" : ""
                } w-full h-full hover:bg-[#443C68aa] grid place-content-center px-5 duration-100`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`${
                  pathname.startsWith("/subjects/pocitacove-systemy")
                    ? "bg-[#443C68aa]"
                    : ""
                } w-full h-full hover:bg-[#443C68aa] grid place-content-center px-5 duration-100`}
                href="/subjects/pocitacove-systemy"
              >
                Počítačové systémy
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`${
                  pathname.startsWith("/subjects/programove-vybaveni")
                    ? "bg-[#443C68aa]"
                    : ""
                } w-full h-full hover:bg-[#443C68aa] grid place-content-center px-5 duration-100`}
                href="/subjects/programove-vybaveni"
              >
                Programové vybavení
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`${
                  pathname.startsWith("") ? "bg-[#443C68aa]" : ""
                } w-full h-full hover:bg-[#443C68aa] grid place-content-center px-5 duration-100 text-3xl`}
                href=""
              >
                <HiUser />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
