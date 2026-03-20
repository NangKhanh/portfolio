import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { ScrollProgress } from "./magicui/scroll-progress";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-8 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#1a1513]/70 px-4 py-2.5 shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-5 md:py-3">
          <Link
            to="hero"
            smooth
            duration={700}
            className="cursor-pointer"
          >
            <div className="cursor-hover flex items-center gap-2 md:gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f79752] to-[#49b5ba] text-sm font-bold text-[#140e0c] shadow-[0_0_30px_rgba(247,151,82,0.35)] md:h-11 md:w-11">
                KN
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#f5b07d] md:text-sm md:tracking-[0.26em]">Portfolio</p>
                <h1 className="truncate text-sm font-semibold text-white md:text-lg">Nguyen Nang Khanh</h1>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={0}
                offset={-80}
                className="cursor-hover rounded-full px-4 py-2 text-sm font-medium text-[#d9cec5] transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#d8cbc0] md:flex">
              <Sparkles className="h-4 w-4 text-[#f7b57c]" />
              Open to frontend and fullstack roles
            </div>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <ScrollProgress className="top-[0px] h-[3px] rounded-full bg-gradient-to-r from-[#f79752] via-[#f4c96b] to-[#49b5ba]" />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-3 top-20 z-40 rounded-[28px] border border-white/10 bg-[#171311]/95 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={0}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-base font-medium text-[#f4ebe2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
