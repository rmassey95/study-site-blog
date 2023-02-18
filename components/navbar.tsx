import Link from "next/link";
import uniqid from "uniqid";

const Navbar = ({ allFolders }) => {
  const foldMenu = () => {
    document.querySelector("#fold-menu-opts").classList.toggle("hide");
  };

  return (
    <nav className="flex py-1 justify-between shadow-sm px-10">
      <Link
        href="/"
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <button
        onClick={foldMenu}
        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 relative"
      >
        Folders
        <div
          id="fold-menu-opts"
          className="absolute bg-white left-1/2 -translate-x-1/2 mt-6 border rounded-lg p-4 opacity-100 opacity-0 hide transition-opacity duration-300"
        >
          <div className="flex flex-col space-y-2">
            {allFolders.map((folder) => {
              return (
                <Link
                  key={uniqid()}
                  href={`/folder/${folder.data.folder}`}
                  className="rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                  {folder.data.title}
                </Link>
              );
            })}
          </div>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
