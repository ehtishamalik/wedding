import EventPage from "@/components/EventPage";

const Mehndi = () => {
  return (
    <EventPage
      eventName="Mehndi"
      eventDate={new Date("2026-12-10T17:00:00")}
      details={{
        date: "December 10, 2026",
        time: "5:00 PM onwards",
        venue: "The Moonlit Garden",
        address: "42 Starflower Lane, Somewhere Magical ✨",
      }}
    />
  );
};

export default Mehndi;
