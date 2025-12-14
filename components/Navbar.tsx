"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

type Position = { left: number; width: number; opacity: number };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverPos, setHoverPos] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activePos, setActivePos] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = isScrolled
    ? "bg-[var(--background)] text-[var(--foreground)] backdrop-blur-xl shadow-sm border-b border-[var(--grid-major)]"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <Link href="/" className="flex pb-2 items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 ml-5 justify-center">
          <ul
            onMouseLeave={() => setHoverPos({ ...hoverPos, opacity: 0 })}
            className="relative flex mt-2 w-fit rounded-full border border-[var(--honey)] p-0.5 bg-[var(--background)]"
          >
            {navLinks.map(({ href, label }) => (
              <NavTab
                key={href}
                href={href}
                setHoverPos={setHoverPos}
                setActivePos={setActivePos}
                isActive={pathname === href}
              >
                {label}
              </NavTab>
            ))}

            <Cursor position={hoverPos.opacity ? hoverPos : activePos} />
          </ul>
        </div>

        {/* Desktop CV Button */}
        <div className="hidden md:flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="https://drive.google.com/file/d/1_UX9SOEnPueWsGxjgH2_TAt5Ofu4MrgB/view?usp=sharing"
              target="_blank"
              className="
                group relative flex items-center justify-center
                px-4 py-2
                rounded-full 
                border border-current 
                font-medium 
                shadow-md hover:shadow-lg 
                transition-all duration-300 
                text-sm
                w-[140px]
              "
            >
              <span className="relative z-10">Download CV</span>

              <ChevronLeft
                size={16}
                className="
                  absolute right-2
                  opacity-0 translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              flex items-center gap-2 px-4 py-2 
              rounded-full shadow font-medium 
              text-[var(--background)]
              active:scale-95 transition-all
            "
          >
            <span className="text-sm"></span>
            <ChevronLeft
              size={17}
              className={`text-[var(--sun)] transition-transform ${
                mobileMenuOpen ? "rotate-0" : "-rotate-180"
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute left-20 top-full w-full px-25 mt-0
              flex flex-col
            "
          >
            <div
              className="
                rounded-3xl p-2
                backdrop-blur-1xl bg-white/10
                border border-white/10
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    w-full block px-4 py-3 rounded-xl 
                    font-medium text-sm transition-all
                    ${
                      pathname === href
                        ? "bg-[var(--sun)] text-[var(--background)] shadow-md"
                        : "text-[var(--foreground)] hover:bg-white/10"
                    }
                  `}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile CV Button */}
              <Link
                href="https://drive.google.com/file/d/1_UX9SOEnPueWsGxjgH2_TAt5Ofu4MrgB/view?usp=sharing"
                target="_blank"
                className="
                  mt-4 w-full flex items-center justify-center px-4 py-3 
                  rounded-full border border-white/30 
                  text-[var(--background)]
                  bg-[var(--sun)] shadow-md
                  active:scale-55 transition-all text-sm
                "
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

/* --------------------- NavTab --------------------- */

type NavTabProps = {
  href: string;
  children: ReactNode;
  setHoverPos: React.Dispatch<React.SetStateAction<Position>>;
  setActivePos: React.Dispatch<React.SetStateAction<Position>>;
  isActive: boolean;
};

const NavTab = ({
  href,
  children,
  setHoverPos,
  setActivePos,
  isActive,
}: NavTabProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setActivePos({ left: ref.current.offsetLeft, width, opacity: 1 });
    }
  }, [isActive, setActivePos]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setHoverPos({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 px-4 py-2 text-sm uppercase cursor-pointer group"
    >
      <Link
        href={href}
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-[var(--background)]"
            : "text-[var(--foreground)] group-hover:text-[var(--background)]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

/* --------------------- Highlight Cursor --------------------- */

type CursorProps = { position: Position };

const Cursor = ({ position }: CursorProps) => (
  <motion.li
    animate={{
      left: position.left,
      width: position.width,
      opacity: position.opacity,
    }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    className="
      absolute z-0 h-full rounded-full 
      bg-[var(--sun)]/70 
      backdrop-blur-md 
      shadow-[inset_0_0_10px_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.2)]
      border border-white/20
    "
  />
);