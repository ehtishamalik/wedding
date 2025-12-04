import React from "react";
import { NavLink } from "./NavLink";

const Navigation: React.FC = () => {
  const links = [
    // { to: "/", label: "Home" },
    { to: "/mehndi", label: "Mehndi" },
    { to: "/barat", label: "Barat" },
    { to: "/walima", label: "Walima" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-gold">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <ul className="flex justify-center gap-4 md:gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="font-display text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
