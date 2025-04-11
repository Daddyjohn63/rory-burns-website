import Image from 'next/image';
import { getEvent } from '@/lib/events';

export default async function EventPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const event = await getEvent(slug);

  return (
    <>
      <h1 className="text-4xl mt-24 font-bold">{event.title}</h1>
      <p className="text-gray-500">{event.date}</p>
      <p className="text-gray-500">{event.description}</p>
      <Image src={event.image} alt={event.title} width={1000} height={1000} />
      <article
        className=" prose"
        dangerouslySetInnerHTML={{ __html: event.body }}
      />
    </>
  );
}
