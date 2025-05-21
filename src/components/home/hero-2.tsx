'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { MotionDiv, MotionH1 } from '../common/motion-wrapper';
import {
  itemVariants,
  containerVariants,
  buttonVariants
} from '@/utils/constants';

export default function Hero2() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-black"
    >
      <div className="relative isolate overflow-hidden pt-36">
        <div
          className="absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-45rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>
        <div className="absolute inset-0 -z-10">
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <Image
            alt="Rory Burns hero image"
            src="/home/hero-5.jpg"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            width={1920}
            height={1080}
            priority
            quality={85}
            sizes="(max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, (max-width: 1080px) 1080px, (max-width: 1200px) 1200px, 1920px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHh4eHRoaHSQtJSEkLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-4 pb-16 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <MotionDiv
                variants={itemVariants}
                className="relative rounded-full px-3 py-1 text-white ring-1 ring-yellow-600"
              >
                A Testimonial Year of Cricket and Community
              </MotionDiv>
            </div>
            <div className="text-center">
              <MotionH1
                variants={itemVariants}
                className="text-balance text-5xl font-semibold tracking-wide md:leading-loose sm:text-7xl"
              >
                Celebrating Rory Burns
              </MotionH1>
              <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
                Join us as we honour Rory&apos;s remarkable journey and support
                charities close to his heart
              </p>
              <MotionDiv
                variants={itemVariants}
                whileHover={buttonVariants}
                className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6"
              >
                <Button asChild variant="rory" className="font-bold">
                  <a href="/events">
                    <span className="font-bold text-xl text-white">
                      Support our events
                    </span>
                    <ArrowRight className="animate-pulse" />
                  </a>
                </Button>
                <Button asChild variant="rory" className="font-bold">
                  <a href="/charities#donate" className="scroll-mt-[120px]">
                    <span className="font-bold text-xl text-white">
                      Donate to our charities
                    </span>
                    <ArrowRight className="animate-pulse" />
                  </a>
                </Button>
              </MotionDiv>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </MotionDiv>
  );
}
