import { ArrowRight } from "lucide-react";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#1e1919] dark:bg-slate-800 ">
      <div className=" p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5 ">
        <h1 className="text-5xl font-bold">
          Welcome to Dropbox.
          <br />
          <br />
          Storing everything for you and your business needs. All in one place
        </h1>
        <p className="pb-28">
          Enhance your personal storage with Dropbox, offering a simple and
          efficient way to upload, organize, and access files from anywhere.
          Securely store important documents and media, and experience the
          convenience of easily file management and sharing in one centralized
          solution.
        </p>
        <Link
          href="/dashboard"
          className="flex cursor-pointer bg-blue-500 p-5 w-fit hover:scale-105 transition "
        >
          Try it for free!
          <ArrowRight className="ml-10 " />
        </Link>
      </div>
      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10 ">
        <img src="/all-files-desktop.webp" alt="image" />
      </div>
    </div>
  );
};

export default page;
