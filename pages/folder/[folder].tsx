import { getAllNotes } from "../../lib/noteRead";
import Note from "../../interfaces/folder";

export default function Folder({ allNotes }: Props) {
  console.log(allNotes);
  return (
    <div>
      {allNotes.map((note) => {
        return <div>{note.title}</div>;
      })}
    </div>
  );
}

type Props = {
  allNotes: { title: string }[];
};

type Params = {
  params: {
    folder: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allNotes = getAllNotes(`${params.folder}`, ["title"]);
  return { props: { allNotes } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { folder: "programming" } },
      { params: { folder: "hardware" } },
      { params: { folder: "finance" } },
    ],
    fallback: false,
  };
}
