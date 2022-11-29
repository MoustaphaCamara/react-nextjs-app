import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">A propos</Link>
          </li>
          <li>
            <Link href="/apiPage">API</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
