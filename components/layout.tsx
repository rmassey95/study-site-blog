import Navbar from "./navbar";
import Folder from "../interfaces/folder";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  allFolders: Folder[];
};

const Layout = ({ preview, children, allFolders }: Props) => {
  return (
    <div>
      <Navbar allFolders={allFolders} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
