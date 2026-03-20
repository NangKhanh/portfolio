export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#100d0c]/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-[#ccbfb4] md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-base font-semibold text-[#fff5ea]">Nguyen Nang Khanh</p>
          <p>Frontend-focused fullstack engineer building polished digital products.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#9ea8a9]">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
        </div>
      </div>
    </footer>
  );
}
