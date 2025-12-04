import EventPage from "../components/EventPage";

const Mehndi = () => {
  return (
    <EventPage
      eventName="Mehndi"
      eventDate={new Date("2025-12-31T18:00:00")}
      details={{
        date: "December 31, 2025",
        time: "6:00 PM onwards",
        venue: "Mashallah Marquee",
        address: "Gondhlanwala Road, Near Steel Sheet Market",
      }}
    />
  );
};

export default Mehndi;
