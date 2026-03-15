export default function Header() {
  return (
    <div className="nav-section">
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-black tracking-tighter text-white uppercase font-mag-sans">
          ICE BREAKING{" "}
          <span className="text-neutral-500 text-xs ml-2 font-light italic">
            vol. 01
          </span>
        </h1>
        <nav className="flex gap-10 text-[11px] font-bold tracking-[0.3em] text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">
            ARCHIVE
          </a>
          <a href="#" className="hover:text-white transition-colors">
            PROJECTS
          </a>
          <a href="#" className="hover:text-white transition-colors">
            CONNECT
          </a>
        </nav>
      </div>
    </div>
  );
}
