import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/**left */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/**middle */}
        <div className="max-w-xs">
          <div className=" relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5 text-gray-500 block " />
            </div>
            <input
              type="text"
              placeholder="Serach"
              className="bg-gray-50 pl-10 border-gray-300 sm:text-sm rounded-md focus:ring-black focus:border-black w-full"
            />
          </div>
        </div>
        {/**right */}
      </div>
    </div>
  );
}

export default Header;
