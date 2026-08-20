import EventPage from "@/components/EventPage";

const Walima = () => {
  return (
    <EventPage
      eventName="Walima"
      eventDate={new Date("2026-12-12T19:00:00")}
      details={{
        date: "December 12, 2026",
        time: "7:00 PM onwards",
        venue: "Enchanted Terrace & Blooms",
        address: "3 Forever After Street, Dreamland 💫",
      }}
    />
  );
};

export default Walima;
