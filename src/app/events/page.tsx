import { getEvents } from '@/lib/events';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { InnerHeader } from '@/components/common/Inner-header';
import { Calendar, MapPin } from 'lucide-react';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

export default async function EventsPage() {
  const events = await getEvents();
  //console.log('events', events);

  return (
    <section>
      <InnerHeader
        title="Events"
        description="Come and support us at our events"
      />
      <div className="container mx-auto max-w-7xl pb-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <Card key={event.slug} className="flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>
                  <h3 className="text-2xl font-semibold line-clamp-2 min-h-[3.5rem]">
                    {event.title}
                  </h3>
                </CardTitle>
                <CardDescription className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#000/70]" />
                    {!event.end_date
                      ? formatDate(event.start_date)
                      : `${formatDate(event.start_date)} - ${formatDate(
                          event.end_date
                        )}`}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#000/70]" />
                    {event.venue}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild variant="event">
                  <a href={`/events/${event.slug}`}>Find out more...</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
