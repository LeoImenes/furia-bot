import './styles.css';

import intelImage from '../../assets/events/iem.png';
import pglImage from '../../assets/events/pgl.png';
import blastImage from '../../assets/events/blast.png';

export const NextEvents = () => {
  const events = [
    {
      title: "IEM DALLAS 2025",
      organizer: "ESL",
      date: "10/05/2025-18/05/2025",
      image: intelImage,
      link: "https://pro.eslgaming.com/tour/pt/cs/dallas/"
    },
    {
      title: "PGL ASTANA 2025",
      organizer: "",
      date: "19/05/2025-25/05/2025",
      image: pglImage,
      link: "https://www.pglesports.com/cs2/pgl-astana-2025/"

    },
    {
      title: "BLASTtv MAJOR",
      organizer: "",
      date: "07/06/2025-10/06/2025",
      image: blastImage,
      link: "https://blast.tv/cs/austin-major-2025"

    }
  ];

  const handleEventClick = (link: string) => {
    window.open(link, "_blank");
}


  return (
    <div className="events-container">
      <h2 className="events-title">ProxÍmos Eventos</h2>
      
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card" onClick={() => handleEventClick(event.link)}>
            <div className="event-image-wrapper">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-details">
              <div className="event-info">
                <h3 className="event-name">{event.title}</h3>
                {event.organizer && <p className="event-organizer">{event.organizer}</p>}
              </div>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};