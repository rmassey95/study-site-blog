import { getAllNotes, getNoteBySlug } from "../../../lib/noteRead";
import { getFolderData } from "../../../lib/folderRead";
import { join } from "path";
import markdownToHtml from "../../../lib/markdownToHtml";
import Head from "next/head";
import Layout from "../../../components/layout";
import Container from "../../../components/container";
import Folder from "../../../interfaces/folder";
import NoteBody from "../../../components/noteBody";

type Props = {
  note: {
    title: string;
    date: string;
    content: string;
  };
  allFolders: Folder[];
};

export default function Note({ note, allFolders }: Props) {
  return (
    <>
      <Layout allFolders={allFolders}>
        <Head>
          <title>{note.title}</title>
        </Head>
        <Container>
          <h1 className="text-5xl font-bold pb-3 mb-4">{note.title}</h1>
          <NoteBody content={note.content} />
        </Container>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    note: string;
    folder: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allFolders = getFolderData();
  const notesDirectory = join(process.cwd(), `_data/${params.folder}`);
  const note = getNoteBySlug(params.note, notesDirectory, [
    "title",
    "date",
    "content",
  ]);

  const content = await markdownToHtml(note.content || "");

  return {
    props: {
      note: {
        ...note,
        content,
      },
      allFolders,
    },
  };
}

export async function getStaticPaths() {
  const allNotes = [];
  const folders = ["programming", "hardware"];
  for (let i = 0; i < 2; i++) {
    allNotes.push(getAllNotes(folders[i], ["title", "folder"]));
  }
  const paramNotes = [];
  allNotes.map((notes) => {
    return notes.map((note) => {
      if (note) {
        paramNotes.push({
          params: {
            folder: note.folder && note.folder.toLowerCase(),
            note: note.title && note.title.toLowerCase(),
          },
        });
      }
    });
  });

  return {
    paths: paramNotes,
    fallback: false,
  };
}
