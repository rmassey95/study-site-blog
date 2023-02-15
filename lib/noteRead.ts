import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getNoteSlugs(notesDirectory: string) {
  return fs.readdirSync(notesDirectory);
}

export function getNotesBySlug(
  slug: string,
  folderDirectory: string,
  fields: string[] = []
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(folderDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllNotes(folderName: string, fields: string[] = []) {
  const notesDirectory = join(process.cwd(), `_data/${folderName}`);
  const slugs = getNoteSlugs(notesDirectory);
  const notes = slugs.map((slug) =>
    getNotesBySlug(slug, notesDirectory, fields)
  );

  return notes;
}
