interface InnerHeaderProps {
  title: string;
  description: string;
}

export const InnerHeader = ({ title, description }: InnerHeaderProps) => {
  return (
    <header className="relative h-[250px] w-full bg-black">
      <div className="absolute inset-0">
        <svg className="h-full w-full stroke-white/30" aria-hidden="true">
          {/* <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs> */}
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/40">
            {/* <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            /> */}
          </svg>
          {/* <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          /> */}
        </svg>

        {/* Gradient blob */}
        <div
          className="absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-5xl font-bold text-center mt-10 px-4 text-white">
          {title}
        </h1>
        <p className="text-white/70 text-xl text-center px-4 lg:w-1/2">
          {description}
        </p>
      </div>
    </header>
  );
};
