"use client";

import Image from "next/image";
import {
  CloudinaryGrid,
  ComponentWrapper,
  ReviewGrid,
  StepsOfProcess,
} from "@/components";
import { services } from "@/utils/constants";
import { Instagram, Send } from "lucide-react";

export const MainPage = () => {
  return (
    <div className="page relative w-full bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/images/1.jpg"
          alt="Anna Strok"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <ComponentWrapper>
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
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

      {/* About Section */}
      <ComponentWrapper>
        <section className="py-12 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold md:md:mb-12 mb-6 mb-6">
            About me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Image
              src="/images/2.jpg"
              alt="Anna Strok"
              className="rounded-2xl shadow-md object-cover w-full aspect-square"
              width={3603}
              height={5404}
            />
            <div className="flex flex-col gap-8">
              <p className="text-lg md:text-2xl">
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
              <a
                href="#contact"
                className="self-start text-base md:text-lg px-8 py-4 border border-black bg-white text-black rounded-lg uppercase hover:bg-black hover:text-white transition-colors font-bold w-full md:w-[320px] text-center"
              >
                Work with me
              </a>
            </div>
          </div>
        </section>
      </ComponentWrapper>

      {/* Services Section */}
      <div className="relative bg-black text-white">
        <Image
          src="/images/3.jpg"
          alt="Anna Strok"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10">
          <ComponentWrapper>
            <section className="py-12 md:py-24">
              <h2 className="text-4xl md:text-5xl font-bold md:mb-12 mb-6">
                My services
              </h2>
              <div className="grid grid-cols-1 min-[820px]:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white text-black p-6 rounded-xl border border-black flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-base">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center mt-24 gap-6">
                <p className="text-3xl md:text-5xl uppercase text-center">
                  Easy process
                </p>
                <StepsOfProcess />
              </div>
            </section>
          </ComponentWrapper>
        </div>
      </div>

      {/* UGC Gallery */}
      <ComponentWrapper>
        <section className="py-12 md:py-24 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-black md:mb-12 mb-6">
            UGC content
          </h2>
          <div className="flex mb-12">
            <CloudinaryGrid />
          </div>
          <ReviewGrid />
        </section>
      </ComponentWrapper>

      {/* Contact Section */}
      <footer id="contact" className="bg-black text-white">
        <ComponentWrapper>
          <section className="pt-12 pb-16 md:pt-24 pb-24 flex flex-col md:flex-row gap-12 md:gap-24">
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
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.instagram.com/anna.strok_dance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                  </a>
                  <a
                    href="https://t.me/annastrok_dance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                    aria-label="Telegram"
                  >
                    <Send className="w-6 h-6 md:w-7 md:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ComponentWrapper>
      </footer>
    </div>
  );
};

export default MainPage;
