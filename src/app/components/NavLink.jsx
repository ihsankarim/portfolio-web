const { default: Link } = require("next/link");

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text[#1c1d1d] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-black"
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;
