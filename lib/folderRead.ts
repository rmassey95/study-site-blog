import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getFolderContentBySlug(slug: string, folderDirectory: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(folderDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {
    data,
    content,
  };

  return items;
}

export function getFolderData(dest: string) {
  const folderDirectory = join(process.cwd(), "_data");

  const slugs = fs.readdirSync(folderDirectory);
  const filteredSlugs = slugs.filter((slug) => slug.split(".").pop() === "md");
  const folders = filteredSlugs.map((slug) =>
    getFolderContentBySlug(slug, folderDirectory)
  );

  return folders;
}
