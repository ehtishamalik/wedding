import EventPage from "../components/EventPage";

const Walima = () => {
  return (
    <EventPage
      eventName="Walima"
      eventDate={new Date("2026-01-02T19:00:00")}
      details={{
        date: "January 2, 2026",
        time: "7:00 PM onwards",
        venue: "Moon Light Marquee",
        address: "Main G.T Road, Near Fazaia Housing Scheme",
      }}
    />
  );
};

export default Walima;
