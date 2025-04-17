import {
  getEvent,
  getEventBySlug,
  getNextEvent,
  getPreviousEvent
} from '@/lib/events';
import { InnerHeader } from '@/components/common/Inner-header';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = await getEventBySlug();
  return slugs.map(slug => ({
    slug: slug
  }));
}

export default async function EventPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const event = await getEvent(slug);
  const nextEvent = await getNextEvent(event.start_date);
  const previousEvent = await getPreviousEvent(event.start_date);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="">
      <InnerHeader title={event.title} description="" />
      <div className="container mx-auto max-w-7xl py-12 mb-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-[#9C8561]" />
                <span>
                  {event.end_date
                    ? `${formatDate(event.start_date)} - ${formatDate(
                        event.end_date
                      )}`
                    : formatDate(event.start_date)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#9C8561]" />
                <span>{event.venue}</span>
              </div>
            </div>

            <article
              className="prose prose-lg max-w-4xl"
              dangerouslySetInnerHTML={{ __html: event.body }}
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              {event.link && (
                <Button asChild variant="event">
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy Tickets
                  </Link>
                </Button>
              )}
              {event.email && (
                <Button asChild variant="event">
                  <Link
                    href={`mailto:${event.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Click to email
                  </Link>
                </Button>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
              {previousEvent ? (
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Link href={`/events/${previousEvent.slug}`}>
                    <ChevronLeft className="w-4 h-4" />
                    Previous Event
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 cursor-not-allowed"
                  disabled
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Event
                </Button>
              )}
              {nextEvent ? (
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Link href={`/events/${nextEvent.slug}`}>
                    Next Event
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 cursor-not-allowed"
                  disabled
                >
                  Next Event
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
