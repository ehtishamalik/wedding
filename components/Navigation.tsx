import Link from "next/link";

const Navigation = () => {
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
              <Link
                href={link.to}
                className="font-display text-sm md:text-base text-muted-foreground hover:text-primary transition-colors active:text-primary active:font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
