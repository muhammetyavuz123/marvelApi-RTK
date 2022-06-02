import { CardList, Tittle } from "./components";

function Home() {
  return (
    <div className="App">
      <header className="text-red-700">
        <Tittle tittle={"Marvels Characters"} />
        <CardList />
      </header>
    </div>
  );
}

export default Home;
