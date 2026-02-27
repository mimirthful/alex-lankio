import Header from "./assets/Header"
import GamesContainer from "./assets/GamesContainer"
import SitesContainer from "./assets/SitesContainer"
function App() {
  return (
    <>
      <div className="container border rounded p-5 text-center my-2">
        <Header/>
        <h2 className="text-light"> Projects</h2>

        <h3 className="text-light"> Sites</h3>
        <SitesContainer/>

        <h3 className="text-light"> Games </h3>

        <GamesContainer/>
          

      </div>
    </>
  )
}

export default App
