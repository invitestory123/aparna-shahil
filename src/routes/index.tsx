import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { Hero } from "@/components/invitation/Hero";
import { BackgroundMusic } from "@/components/invitation/BackgroundMusic";
import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Details } from "@/components/invitation/Details";
import { Timeline } from "@/components/invitation/Timeline";
import { Gallery } from "@/components/invitation/Gallery";
import { Footer } from "@/components/invitation/Footer";
import { invitation } from "@/content/invitation";

const title = `${invitation.couple.bride} & ${invitation.couple.groom} — Wedding Invitation`;
const description = `Together with our families, we cordially invite you to celebrate the wedding ceremony of ${invitation.couple.bride} & ${invitation.couple.groom} on ${invitation.dateLabel} at ${invitation.venue.name}, Mahoba.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: "Aparna & Sahil Wedding" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${invitation.couple.bride} & ${invitation.couple.groom} Wedding Invitation` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroGate onOpen={() => setPlayMusic(true)} />
      <BackgroundMusic autoPlayTrigger={playMusic} />
      <Hero />
      <CoupleStory />
      <Countdown />
      <Details />
      <Timeline />
      <Gallery />
      <Footer />
    </main>
  );
}

