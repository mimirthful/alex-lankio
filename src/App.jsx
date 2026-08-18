import Header from "./assets/Header";
import GamesContainer from "./assets/GamesContainer";
import SitesContainer from "./assets/SitesContainer";

function App() {
  return (
    <>
      <div className="container bg-secondary border border-secondary rounded p-5 text-center my-5">
        <Header />

        <h2 className="text-light"> Projects</h2>
        <SitesContainer />
        <GamesContainer />
      </div>
    </>
  );
}

export default App;
