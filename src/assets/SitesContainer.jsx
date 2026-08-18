import isoheikkila from "./images/isoheikkila.png";
import pokedex from "./images/pokedex.png";
import reflections from "./images/reflections.png";
import InfoCard from "./InfoCard";
import Aurinkoone from "./images/aurinkoone.png";
export default function SitesContainer() {
  return (
    <div className="row justify-content-center my-3">
      <h3 className="p-2 text-light">Sites and apps</h3>
      <InfoCard
        name="Aurinkoone"
        subtitle="Python, wxPython"
        picture={Aurinkoone}
        alt="Photo of the app"
        description="Python-based desktop app for Tampere locals, which shows weather and user's selected bus stops."
        linkAddress="https://github.com/mimirthful/Aurinkoone"
        linkName="Check out"
      />

      <InfoCard
        name="Clubroom Booking"
        subtitle="React, css, JSON"
        picture={isoheikkila}
        alt="Photo of the website"
        description="Booking website for the Iso-Heikkilä's clubroom, created for the Annala-Iso-Heikkilä's tenants' committee."
        linkAddress="https://mimirthful.github.io/room-booking/"
        linkName="Check out"
      />

      <InfoCard
        name="Pokedex"
        subtitle="React & Bootstrap 5"
        picture={pokedex}
        alt="Photo of the website"
        description="A small simple Pokédex site, which uses pokeapi to fetch information about the pokémon."
        linkAddress="https://mimirthful.github.io/bootstrap-react-pokedex/"
        linkName="Check out"
      />

      <InfoCard
        name="Reflections"
        subtitle="React, MUI & express, SQLite"
        picture={reflections}
        alt="Photo of the app"
        description="Ongoing project. It aims to be stoic journaling app using technologies common in fullstack."
        linkAddress="https://github.com/mimirthful/reflections-journal/"
        linkName="Check out"
      />
    </div>
  );
}
