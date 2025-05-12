"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

const logoImage = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase">
    <div className="flex-1">
      <div className="avatar">
        <div className="p-0 h-12 w-12">
          <Link href="/">
            <Logo size={10} padding={1} />
          </Link>
        </div>
      </div>
    </div>
    <div className="">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              loader={logoImage}
              className="size-10"
              width="10"
              height="10"
              alt="Image"
              src="next.svg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
