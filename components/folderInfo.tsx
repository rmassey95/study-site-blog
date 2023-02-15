import Link from "next/link";

const Homepage = ({ title, desc }) => {
  return (
    <div className="mt-4">
      <Link
        className="rounded-lg px-3 py-2 hover:bg-slate-200 hover:text-slate-900 bg-slate-50"
        href={`/folder/${title.toLowerCase()}`}
      >
        {title}
      </Link>
      <p className="ml-8 mt-4">{desc}</p>
      <div className="border-b pt-8"></div>
    </div>
  );
};

export default Homepage;
