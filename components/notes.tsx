import Link from "next/link";

const Notes = ({ allNotes }) => {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-3xl font-bold w-fit border-b pb-2 border-black">
        Notes
      </h2>
      {allNotes.map((note) => {
        return (
          <div className="mt-4">
            <Link
              className="rounded-lg px-3 py-2 hover:bg-slate-200 hover:text-slate-900 bg-slate-50"
              href={`/notes/${note.folder.toLowerCase()}/${note.title.toLowerCase()}`}
            >
              {note.title}
            </Link>
            <p className="pt-2 pl-3">{note.excerpt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
