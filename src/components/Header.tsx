function Header(): JSX.Element {
  return (
    <header className="bg-dark border-b-4 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-comic text-white tracking-wider hover:text-primary transition-colors cursor-pointer select-none">
          ComXStudio<span className="text-primary">.ai</span>
        </div>
        <div className="bg-warning text-black font-bold text-xs uppercase px-3 py-1 rounded-sm border-2 border-black shadow-[2px_2px_0_#000]">
          Bêta Privée
        </div>
      </div>
    </header>
  );
}

export default Header;
