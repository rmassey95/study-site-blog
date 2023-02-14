const Navbar = () => {
  const subfoldMenu = () => {
    document.querySelector("#subfold-menu-opts").classList.toggle("hide");
  };

  return (
    <>
      <nav className="flex py-1 shadow-sm justify-around space-x-4">
        <a
          href="/"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <button
          onClick={subfoldMenu}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 relative"
        >
          Subfolders
          <div
            id="subfold-menu-opts"
            className="absolute bg-white left-1/2 -translate-x-1/2 mt-6 border rounded-lg p-4 opacity-100 opacity-0 hide transition-opacity duration-300"
          >
            <div className="flex flex-col space-y-2">
              <a
                href="/programming"
                className="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                Programming
              </a>{" "}
              <a
                href="/hardware"
                className="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                Hardware
              </a>
            </div>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
