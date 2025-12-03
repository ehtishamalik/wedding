import React, { useState, useEffect, useMemo } from "react";
import Countdown from "./Countdown";
import FloralDecor from "./FloralDecor";
import { ANIMATION_START_DATE, WEDDING_DATE } from "../constants";

const WeddingHero: React.FC = () => {
  const [moveProgress, setMoveProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();

      // If before animation start date, no movement
      if (now < ANIMATION_START_DATE) {
        return 0;
      }

      // If wedding day or after, fully together
      if (now >= WEDDING_DATE) {
        return 1;
      }

      // Calculate progress from Dec 1 to Jan 1
      const totalDuration =
        WEDDING_DATE.getTime() - ANIMATION_START_DATE.getTime();
      const elapsed = now.getTime() - ANIMATION_START_DATE.getTime();

      return Math.min(1, Math.max(0, elapsed / totalDuration));
    };

    setMoveProgress(calculateProgress());

    // Update every minute for smooth progression
    const timer = setInterval(() => {
      setMoveProgress(calculateProgress());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Calculate the offset - starts at 100% (far apart) and goes to 0% (together)
  const brideOffset = useMemo(() => {
    const maxOffset = 100; // percentage - start further apart
    return -maxOffset * (1 - moveProgress);
  }, [moveProgress]);

  const groomOffset = useMemo(() => {
    const maxOffset = 100; // percentage - start further apart
    return maxOffset * (1 - moveProgress);
  }, [moveProgress]);

  const isWeddingDay = moveProgress >= 1;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 paisley-pattern opacity-50" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />

      {/* Decorative corners */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Decorative divider */}
        <div className="mb-8 md:mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 md:w-40 bg-linear-to-r from-transparent to-primary" />
          <span className="text-primary text-2xl">❧</span>
          <div className="h-px w-16 md:w-40 bg-linear-to-l from-transparent to-primary" />
        </div>

        {/* Couple illustrations */}
        <div className="relative w-full max-w-4xl flex items-end justify-center mb-8 md:mb-12">
          {/* Groom - facing right */}
          <div
            className="w-44 z-10 transition-transform duration-1000 ease-out"
            style={{
              transform: `translateX(${brideOffset + 30}%)`,
            }}
          >
            <img
              src="/bride.png"
              alt="Bride"
              className="animate-float transition-transform"
            />
          </div>

          {/* Heart indicator when together */}
          {isWeddingDay && (
            <div className="absolute z-20 -top-8 left-1/2 animate-pulse-soft">
              <span className="text-4xl md:text-5xl">💕</span>
            </div>
          )}

          {/* Bride - facing left */}
          <div
            className="w-44 duration-1000 ease-out"
            style={{
              transform: `translateX(${groomOffset - 30}%)`,
            }}
          >
            <img
              src="/groom.png"
              alt="Groom"
              className="animate-float-delayed transition-transform"
            />
          </div>
        </div>

        {/* Progress bar showing how close they are */}
        {moveProgress > 0 && moveProgress < 1 && (
          <div className="w-full max-w-md mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground font-display">
                Apart
              </span>
              <span className="text-sm text-primary font-display font-medium">
                {Math.round(moveProgress * 100)}% closer
              </span>
              <span className="text-sm text-muted-foreground font-display">
                Together
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-gold to-primary rounded-full transition-all duration-1000"
                style={{ width: `${moveProgress * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Countdown */}
        <div className="w-full max-w-2xl">
          <Countdown />
        </div>

        {/* Footer message */}
        <footer className="mt-8 md:mt-12 text-center">
          <p className="font-display text-lg md:text-xl text-muted-foreground italic">
            "Two souls, one journey"
          </p>
          {moveProgress > 0 && moveProgress < 1 && (
            <p className="mt-2 text-sm text-primary/80 font-medium">
              {moveProgress < 0.1 && "Just started the journey..."}
              {moveProgress >= 0.1 &&
                moveProgress < 0.25 &&
                "The path unfolds before them..."}
              {moveProgress >= 0.25 &&
                moveProgress < 0.5 &&
                "Drawing closer each day..."}
              {moveProgress >= 0.5 &&
                moveProgress < 0.75 &&
                "Halfway to forever..."}
              {moveProgress >= 0.75 &&
                moveProgress < 0.9 &&
                "Almost there now..."}
              {moveProgress >= 0.9 && "Just moments away! 💕"}
            </p>
          )}
          {moveProgress >= 1 && (
            <p className="mt-2 text-sm text-primary font-medium animate-pulse-soft">
              Together at last! 💕
            </p>
          )}
        </footer>

        {/* Sparkle decorations */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold-light rounded-full animate-sparkle"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-sparkle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-gold-light rounded-full animate-sparkle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
};

export default WeddingHero;
