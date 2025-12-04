import React, { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventCountdownProps {
  eventDate: Date;
  eventName: string;
}

const EventCountdown: React.FC<EventCountdownProps> = ({
  eventDate,
  eventName,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isEventDay, setIsEventDay] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      setIsEventDay(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [eventDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate, calculateTimeLeft]);

  if (isEventDay) {
    return (
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-primary animate-pulse-soft">
          Today is {eventName}!
        </h2>
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
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-card border border-gold/30 shadow-lg flex items-center justify-center backdrop-blur-sm">
              <span className="font-display text-xl md:text-3xl font-bold text-foreground">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-primary rounded-tl" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-primary rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-primary rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-primary rounded-br" />
          </div>
          <span className="mt-2 font-body text-xs uppercase tracking-wider text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EventCountdown;
