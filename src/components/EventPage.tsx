import React from "react";
import EventCountdown from "./EventCountdown";
import FloatingHearts from "./FloatingHearts";
import FloralDecor from "./FloralDecor";
import clsx from "clsx";
// import Navigation from "./Navigation";

interface EventDetails {
  date: string;
  time: string;
  venue: string;
  address: string;
}

interface EventPageProps {
  eventName: string;
  eventDate: Date;
  details: EventDetails;
}

const EventPage: React.FC<EventPageProps> = ({
  eventName,
  eventDate,
  details,
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 paisley-pattern opacity-50" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />

      {/* Floating hearts */}
      <FloatingHearts />

      {/* Decorative corners */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      {/* Navigation */}
      {/* <Navigation /> */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Event name */}
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-8 text-center">
          {eventName}
        </h1>

        {/* Decorative divider */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 md:w-24 bg-linear-to-r from-transparent to-primary" />
          <span className="text-primary text-xl">❧</span>
          <div className="h-px w-12 md:w-24 bg-linear-to-l from-transparent to-primary" />
        </div>

        {/* Couple illustrations */}
        <div className="relative w-full max-w-3xl flex items-end justify-center mb-8">
          <div className={clsx("scale-83 md:scale-90 translate-y-5")}>
            <img
              src="/bride.png"
              alt="Bride"
              className="animate-float transition-transform"
            />
          </div>
          <div className={clsx("scale-85 md:scale-95")}>
            <img
              src="/groom.png"
              alt="Groom"
              className="animate-float-delayed transition-transform"
            />
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <EventCountdown eventDate={eventDate} eventName={eventName} />
        </div>

        {/* Event details */}
        <div className="bg-card/80 backdrop-blur-sm border border-gold/30 rounded-xl p-6 md:p-8 max-w-md w-full shadow-lg">
          <h2 className="font-display text-2xl text-primary mb-4 text-center">
            Event Details
          </h2>

          <div className="space-y-4 text-center">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Date
              </p>
              <p className="font-display text-lg text-foreground">
                {details.date}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Time
              </p>
              <p className="font-display text-lg text-foreground">
                {details.time}
              </p>
            </div>

            {eventName === "Barat" ? (
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Departure From
                </p>
                <p className="font-body text-foreground">{details.address}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Venue
                  </p>
                  <p className="font-display text-lg text-foreground">
                    {details.venue}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Address
                  </p>
                  <p className="font-body text-foreground">{details.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
