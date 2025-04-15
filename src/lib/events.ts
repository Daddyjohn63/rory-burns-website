import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getEvent(slug: string) {
  const text = await readFile(`src/content/events/${slug}.md`, 'utf-8');
  const {
    content,
    data: {
      image,
      title,
      start_date,
      end_date = '',
      description,
      venue,
      link = '',
      email = ''
    }
  } = matter(text);
  const body = marked(content);

  return {
    slug: slug as string,
    image: image as string,
    title: title as string,
    start_date: start_date as string,
    end_date: end_date as string,
    description: description as string,
    venue: venue as string,
    link: link as string,
    email: email as string,
    body: body as string
  };
}

export type Event = {
  slug: string;
  image: string;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  venue: string;
  link: string;
  email: string;
  body: string;
};

export async function getEvents(): Promise<Event[]> {
  const files = await readdir('src/content/events');
  const eventSlugs = files.filter(file => file.endsWith('.md'));
  const slugs = eventSlugs.map(slug => slug.replace('.md', ''));
  const events: Event[] = [];
  for (const slug of slugs) {
    const event = await getEvent(slug);
    events.push(event);
  }
  return events.sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  );
}

export async function getEventBySlug() {
  const events = await getEvents();
  return events.map(event => event.slug);
}
