import { readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export default async function EventsPage() {
  //const text = await readFile('src/content/event-1.md', 'utf-8');

  const fileContent = await readFile(`src/content/events/event-1.md`, 'utf-8');

  const {
    content,
    data: { title, date, description }
  } = matter(fileContent);

  const html = marked(content);

  //console.log(data);

  return (
    <>
      <h1 className="text-4xl mt-24 text-blue-500 font-bold">{title}</h1>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-500">{description}</p>
      <div className="mt-24 prose" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
