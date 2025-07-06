"use client";

import Image from "next/image";

import {
  CloudinaryGrid,
  ComponentWrapper,
  ReviewGrid,
  StepsOfProcess,
} from "@/components";

import { services } from "@/utils/constants";

export const MainPage = () => {
  return (
    <div className="page relative w-full z-0 bg-white">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/images/1.jpg"
          className="absolute z-0 w-full h-full object-cover"
          alt="Anna Strok"
        />
        <div className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-black/50" />
        <ComponentWrapper>
          <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              I’m Anna Strok
            </h1>
            <p className="text-lg md:text-xl text-white">
              UGC creator helping brands capture attention through beautiful and
              memorable videos
            </p>
          </div>
        </ComponentWrapper>
      </div>

      <ComponentWrapper>
        <div className="w-full py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-12">
            About me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Image
              src="/images/2.jpg"
              alt="Anna Strok"
              className="w-full aspect-square object-cover rounded-xl shadow-md"
            />
            <div className="flex flex-col gap-8">
              <p className="text-lg md:text-xl text-black">
                Hi! My name is Anna Strok, and I’m a UGC creator and a true
                visual thinker at heart. I have a sharp eye for style,
                aesthetics, and detail — creating beautiful content isn’t just a
                choice for me, it’s second nature. For me, every video is more
                than just a shoot — it’s a story meant to make you fall in love
                from the very first seconds. I believe that visually appealing,
                authentic content builds trust and helps brands truly stand out.
                My creative journey started on a different kind of stage — I’m a
                dance teacher with extensive experience in organizing events and
                leading projects. That background taught me how to work with
                people, stay disciplined, and always deliver with
                responsibility. Now I’m growing in the UGC, creating short-form
                videos for social media that are eye-catching, aesthetically
                refined, and aligned with the brand’s voice. I’m flexible —
                happy to follow a brief or come up with original concepts —
                always with heart and good taste. I’m open to collaborations and
                exciting new projects!
              </p>
              <button className="text-base md:text-lg px-6 py-4 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 rounded cursor-pointer uppercase">
                Work with me
              </button>
            </div>
          </div>
        </div>
      </ComponentWrapper>

      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/3.jpg"
          className="absolute z-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute z-10 inset-0 bg-black/50" />

        <ComponentWrapper>
          <div className="relative z-20 py-16 md:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white mb-12">
              My services
            </h2>

            <div className="grid grid-cols-1 min-[820px]:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-black rounded-xl flex flex-col items-start justify-start gap-4 px-5 py-6 w-full"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center mt-16 md:mt-24 gap-6 md:gap-8">
              <p className="w-full text-center uppercase text-3xl sm:text-4xl md:text-5xl text-white">
                Easy process
              </p>
              <StepsOfProcess />
            </div>
          </div>
        </ComponentWrapper>
      </div>

      <ComponentWrapper>
        <div className="w-full py-24 flex flex-col items-start gap-12">
          <h2 className="text-4xl md:text-5xl font-bold text-left text-black">
            UGC content
          </h2>
          <CloudinaryGrid />
          <ReviewGrid />
        </div>
      </ComponentWrapper>

      <div className="bg-black">
        <ComponentWrapper>
          <div className="text-white w-full py-24 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 px-4 md:px-12 rounded-2xl shadow-lg">
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let’s create something beautiful together
              </h2>
              <p className="text-lg text-white/80">
                Don’t hesitate to reach out — I’m always open to collaborations
                and exciting new projects!
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div>
                <p className="text-lg font-semibold mb-2">Contact</p>
                <p className="text-white/80">Warsaw</p>
                <p className="text-white/80">
                  Tel.:{" "}
                  <a
                    href="tel:+48571571214"
                    className="underline hover:text-white transition"
                  >
                    +48 571 571 214
                  </a>
                </p>
                <p className="text-white/80">
                  Email:{" "}
                  <a
                    href="mailto:kroxxxxx92@gmail.com"
                    className="underline hover:text-white transition"
                  >
                    kroxxxxx92@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold mb-2">Media</p>
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href="https://www.instagram.com/anna.strok_dance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                    </svg>
                  </a>

                  <a
                    href="https://t.me/annastrok_dance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-sky-400 transition"
                    aria-label="Telegram"
                  >
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2Zm4.05 7.55-1.675 7.9c-.125.575-.45.7-.925.45l-2.55-1.875-1.225 1.175c-.15.15-.275.275-.55.275l.2-2.8 5.1-4.6c.225-.2-.05-.3-.35-.1l-6.3 3.95-2.7-.85c-.575-.175-.585-.575.125-.85l10.55-4.075c.5-.2.925.125.75.85Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default MainPage;
