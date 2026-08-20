import EventPage from "@/components/EventPage";

const Barat = () => {
  return (
    <EventPage
      eventName="Barat"
      eventDate={new Date("2026-12-11T17:00:00")}
      details={{
        date: "December 11, 2026",
        time: "5:00 PM onwards",
        venue: "The Golden Pavilion",
        address: "7 Rosepetal Avenue, Cloud Nine 🌸",
      }}
    />
  );
};

export default Barat;
