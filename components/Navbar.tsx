"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Send } from "lucide-react";
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
        
        {/* LOGO Placeholder */}
        <Link href="/" className="flex pb-2 items-center">
            <img
            src="/logo.png"   // ← your logo path here
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

            {/* 3D Glass Cursor Highlight */}
            <Cursor position={hoverPos.opacity ? hoverPos : activePos} />
          </ul>
        </div>

        {/* Smaller Centered CV Button */}
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

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center -ml-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              flex items-center gap-2 px-3 py-1.5 
              rounded-full shadow font-medium 
              bg-[var(--honey)] text-[var(--background)]
            "
          >
            <ChevronLeft
              size={14}
              className={`transition-transform ${
                mobileMenuOpen ? "rotate-0" : "-rotate-180"
              }`}
            />
          </button>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="
                absolute right-4 top-full mt-3 
                w-56
                rounded-2xl px-4 py-4 
                flex flex-col gap-2
                backdrop-blur-xl 
                bg-white/10 
                border border-white/20
                shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                text-[var(--foreground)]
              "
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    px-3 py-2 rounded-lg font-medium 
                    transition-all backdrop-blur-md 
                    ${
                      pathname === href
                        ? "bg-[var(--honey)]/80 text-[var(--background)] shadow-md"
                        : "hover:bg-white/10 active:bg-white/20"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
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

/* --------------------- 3D Glass Cursor Highlight --------------------- */

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
