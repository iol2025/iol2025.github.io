import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex bg-cyan-100 justify-between px-16 py-5 text-lg shadow-md">
          <span className="font-bold text-xl">IOL 2025</span>
          <ul className="hidden md:flex gap-x-10 text-gray-600">
            <li>
              <Link href="/">
                <p className="hover:text-black">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-black">About</p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p className="hover:text-black">Support Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
