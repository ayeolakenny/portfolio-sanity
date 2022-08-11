import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link href="/">
            <div className="inline-flex items-center  py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest cursor-pointer">
              Kenny
            </div>
          </Link>
          <Link href="/post">
            <div className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 cursor-pointer">
              Blog Posts
            </div>
          </Link>
          <Link href="/project">
            <div className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 cursor-pointer">
              Projects
            </div>
          </Link>
          <Link href="/about">
            <div className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 cursor-pointer">
              About Me
            </div>
          </Link>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://facebook.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
