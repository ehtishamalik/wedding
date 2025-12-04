import React, { useState, useEffect } from "react";
import { FORMATTED_WEDDING_DATE, WEDDING_DATE } from "../constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = WEDDING_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      setIsWeddingDay(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isWeddingDay) {
    return (
      <div className="text-center">
        <h2 className="font-display text-4xl md:text-5xl text-primary animate-pulse-soft">
          Today is the Day!
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-2">
          Wishing the couple eternal happiness
        </p>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
        Counting down to forever...
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-card border border-gold/30 shadow-lg flex items-center justify-center backdrop-blur-sm">
                <span className="font-display text-2xl md:text-4xl font-bold text-foreground">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br" />
            </div>
            <span className="mt-2 font-body text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <p className="font-body text-sm text-muted-foreground">
        {FORMATTED_WEDDING_DATE}
      </p>
    </div>
  );
};

export default Countdown;
