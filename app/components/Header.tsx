import React from "react";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className=" bg-[#1060FE] w-fit  ">
          <Image
            src="/dropbox.png"
            alt="dropbox-logo"
            className="invert p-2 "
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton />
        <SignedOut>
          <SignInButton mode="modal" fallbackRedirectUrl="/dashboard" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
