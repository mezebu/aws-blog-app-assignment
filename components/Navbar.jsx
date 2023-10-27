import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full  border-b border-gray-300 pb-6 pt-8">
      <div className="container mx-auto flex justify-between px-4">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <Link href="/addpost" className="font-bold hover:text-slate-800">
          Add Blog post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
