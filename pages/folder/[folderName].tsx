import { getAllNotes } from "../../lib/noteRead";
import { getFolderData } from "../../lib/folderRead";
import Layout from "../../components/layout";
import Head from "next/head";
import Folder from "../../interfaces/folder";
import Container from "../../components/container";
import Notes from "../../components/notes";

type Props = {
  allNotes: { title: string; excerpt: string; folder: string }[];
  allFolders: Folder[];
};

type Params = {
  params: {
    folderName: string;
  };
};

export default function FolderContent({ allNotes, allFolders }: Props) {
  const title = `Study Site ${allNotes[0].folder}`;

  return (
    <>
      <Layout allFolders={allFolders}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <h1 className="text-5xl font-bold pb-3 mb-4">{title} Folder</h1>
          <Notes allNotes={allNotes} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const allNotes = getAllNotes(`${params.folderName}`, [
    "title",
    "excerpt",
    "folder",
  ]);
  const allFolders = getFolderData();
  return { props: { allNotes, allFolders } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { folderName: "programming" } },
      { params: { folderName: "hardware" } },
      { params: { folderName: "finance" } },
    ],
    fallback: false,
  };
}
