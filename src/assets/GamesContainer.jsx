import InfoCard from "./InfoCard"
import usSomniaPhoto from "./images/ussomnia.png"
import duckPhoto from "./images/duck.png"
import heartsorePhoto from "./images/heartsore.png"
import appleheistPhoto from "./images/appleheist.png"
export default function GamesContainer()
{
    return <div className="row justify-content-center">
        <InfoCard 
          name="Us, Somnia" 
          subtitle="Lead Programmer, Scrum dude"
          picture={usSomniaPhoto} 
          alt="Photo of the game that contains the game's title and in-game graphics"
          description="An unsettling and nostalgic anomaly-game. Spot the differences, uncover mysteries, and escape!"
          linkAddress="https://konjam.itch.io/us-somnia"
          linkName="Check out"
          />

<InfoCard 
          name="heartsore" 
          subtitle="Lead Programmer"
          picture={heartsorePhoto} 
          alt="Photo of the game that contains the game's title and in-game graphics"
          description="A platformer with 2000's emo goth vibes"
          linkAddress="https://konjam.itch.io/heartsore"
          linkName="Check out"
          />

<InfoCard 
          name="Dazzling Duck Ball" 
          subtitle="Programmer, 3D Art"
          picture={duckPhoto} 
          alt="Photo of the game that contains the game's title and in-game graphics"
          description="A jolly ball rolling game made for the Futurice Game Jam 2025"
          linkAddress="https://ppdonuts.itch.io/dazzling-duck-ball"
          linkName="Check out"
          />



<InfoCard 
          name="Apple Heist" 
          subtitle="Pixel art"
          picture={appleheistPhoto} 
          alt="Photo of the game that contains the game's title and in-game graphics"
          description="Game about sneaking apples from trash containers, made at Game Camp on Summer 2024"
          linkAddress="https://ppdonuts.itch.io/apple-heist"
          linkName="Check out"
          />
    </div>
}