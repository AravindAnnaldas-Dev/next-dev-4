"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const segmentData = [
    {
      path: "",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/services",
      name: "Services",
    },
  ];

  return (
    <>
      <nav className="w-full h-20 bg-[#212121] text-white px-6 py-2 flex items-center justify-start gap-6 fixed top-0 z-[9999]">
        {segmentData.map((nav) => (
          <Link
            key={nav.path}
            href={`/nav-links${nav.path}`}
            className={`${
              pathName === `/nav-links${nav.path}` ? "text-[#2cf8ff]" : ""
            }`}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
