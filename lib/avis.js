import fs from "fs";
import path from "path";
import matter from "gray-matter";

const avisFilePath = path.join(process.cwd(), "content", "avis-clients.md");

export function getAvisClients() {
  const fileContents = fs.readFileSync(avisFilePath, "utf8");
  const { content } = matter(fileContents);

  const avisSections = content
    .split("##")
    .filter((section) => section.trim() !== "");

  const avis = avisSections
    .map((section) => {
      const messageMatch = section.match(/message:\s*(.*)/);
      const locationMatch = section.match(/location:\s*(.*)/);

      if (messageMatch && locationMatch) {
        return {
          message: messageMatch[1].trim(),
          location: locationMatch[1].trim(),
        };
      }
      return null;
    })
    .filter((avis) => avis !== null);

  return avis;
}
