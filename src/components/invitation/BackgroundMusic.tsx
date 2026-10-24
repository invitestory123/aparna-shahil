import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  autoPlayTrigger?: boolean;
}

export function BackgroundMusic({ autoPlayTrigger = false }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = "/assets/bg-music.mp3";

  // Attempt playback
  const startPlaying = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setUserInteracted(true);
      })
      .catch((err) => {
        console.warn("Autoplay was prevented by browser policy:", err);
      });
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setUserInteracted(true);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.warn("Audio play blocked:", e));
    }
  };

  // When external trigger (like opening the intro envelope) fires
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      startPlaying();
    }
  }, [autoPlayTrigger]);

  // First interaction listener to start music if not yet playing
  useEffect(() => {
    const handleFirstGesture = () => {
      if (!userInteracted && audioRef.current && audioRef.current.paused) {
        startPlaying();
      }
    };

    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };
  }, [userInteracted]);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />

      {/* Floating Audio Control Pill */}
      <motion.div
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className="group relative flex items-center gap-2.5 rounded-full border border-[var(--gold)]/40 bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] px-3.5 py-2 text-primary shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-[var(--gold)] hover:bg-[color-mix(in_oklab,var(--ivory)_95%,transparent)]"
        >
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gold)]/20 text-gold-deep">
            {isPlaying ? (
              <Volume2 className="h-3.5 w-3.5 animate-pulse text-[var(--gold-deep)]" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-primary/60" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="font-sans text-[0.65rem] font-semibold tracking-wider text-primary uppercase">
              {isPlaying ? "Music Playing" : "Play Music"}
            </span>
            <span className="font-sans text-[0.55rem] tracking-wider text-primary/60">
              Aparna &amp; Sahil
            </span>
          </div>

          {/* Equalizer animation when playing */}
          {isPlaying && (
            <div className="ml-1 flex items-end gap-[2px] h-3.5" aria-hidden>
              {[0, 1, 2, 3].map((bar) => (
                <motion.span
                  key={bar}
                  className="w-[2px] rounded-full bg-[var(--gold-deep)]"
                  animate={{ height: ["20%", "100%", "40%"] }}
                  transition={{
                    duration: 0.6 + bar * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: bar * 0.1,
                  }}
                />
              ))}
            </div>
          )}
        </button>
      </motion.div>
    </>
  );
}
