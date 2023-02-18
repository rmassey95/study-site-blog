import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Homepage from "../components/homepage";
import { getFolderData } from "../lib/folderRead";
import Folder from "../interfaces/folder";
import FolderInfo from "../components/folderInfo";
import uniqid from "uniqid";

type Props = {
  allFolders: Folder[];
};

export default function Index({ allFolders }: Props) {
  return (
    <>
      <Layout allFolders={allFolders}>
        <Head>
          <title>Ryan Massey Study Site</title>
        </Head>
        <Container>
          <Homepage />
          {allFolders.map((folder) => {
            return (
              <FolderInfo
                key={uniqid()}
                title={folder.data.title}
                folder={folder.data.folder}
                desc={folder.content}
              />
            );
          })}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allFolders = getFolderData();
  return { props: { allFolders } };
};
