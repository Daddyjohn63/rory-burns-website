import { EventGallery, eventData } from '@/utils/events-gallery';
import Image from 'next/image';

interface GalleryProps {
  slug: string;
  title: string;
}

export const Gallery = ({ slug, title }: GalleryProps) => {
  // Find the event data for this slug
  const event = eventData.find((event: EventGallery) => event.slug === slug);

  if (!event || !event.images.length) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Event Gallery</h2>
          <p>A selection of images from the {title} event</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.images.map((image: string, index: number) => (
          <div
            key={index}
            className="relative aspect-[4/3] group overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1} for ${event.slug}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
