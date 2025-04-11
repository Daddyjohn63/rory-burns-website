import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getEvent(slug: string) {
  const text = await readFile(`src/content/events/${slug}.md`, 'utf-8');
  const {
    content,
    data: { image, title, date, description }
  } = matter(text);
  const body = marked(content);

  return {
    slug: slug as string,
    image: image as string,
    title: title as string,
    date: date as string,
    description: description as string,
    body: body as string
  };
}

export async function getEvents() {
  const files = await readdir('src/content/events');
  const eventSlugs = files.filter(file => file.endsWith('.md'));
  const slugs = eventSlugs.map(slug => slug.replace('.md', ''));
  const events = [];
  for (const slug of slugs) {
    const event = await getEvent(slug);
    events.push(event);
  }
  return events;
}

export async function getEventBySlug() {
  const events = await getEvents();
  return events.map(event => event.slug);
}
