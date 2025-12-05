function Header(): JSX.Element {
  return (
    <header className="bg-dark border-b border-medium">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">ComXStudio.ai</div>
        <div className="text-light text-sm">En développement</div>
      </div>
    </header>
  );
}

export default Header;
