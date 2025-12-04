import EventPage from "../components/EventPage";

const Barat = () => {
  return (
    <EventPage
      eventName="Barat"
      eventDate={new Date("2026-01-01T18:00:00")}
      details={{
        date: "January 1, 2026",
        time: "5:00 PM onwards",
        venue: "",
        address: "Main Bazar Syed Pak, Street Jamia Masjid Noor-e-Madina",
      }}
    />
  );
};

export default Barat;
