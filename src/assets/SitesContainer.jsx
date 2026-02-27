import isoheikkila from "./images/isoheikkila.png"
import pokedex from "./images/pokedex.png"
import InfoCard from "./InfoCard"
export default function SitesContainer()
{
    return <div className="row justify-content-center">
            <InfoCard 
              name="Iso-Heikkilä's Clubroom Booking" 
              subtitle="React, css, JSON"
              picture={isoheikkila} 
              alt="Photo of the website"
              description="Booking website for the Iso-Heikkilä's clubroom, created for the Annala-Iso-Heikkilä's tenants' committee."
              linkAddress="https://mimirthful.github.io/room-booking/"
              linkName="Check out"
              />

            <InfoCard 
              name="Pokédex" 
              subtitle="React & Bootstrap 5"
              picture={pokedex} 
              alt=""
              description="A small simple Pokédex site, which uses pokeapi to fetch information about the pokémon. "
              linkAddress="https://mimirthful.github.io/bootstrap-react-pokedex/"
              linkName="Check out"
              />
    
        </div>
}