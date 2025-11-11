import NavBar from "./components/ui/NavBar";
import Banner from "./components/ui/Banner";
import SecaoPosters from "./components/ui/SecaoPosters";
import SecaoRecomendacoes from "./components/ui/SecaoRecomendacoes";

function App() {
  return (
    <>
      <main className="w-full m-0 p-0">
        <div className="flex flex-col pt-20 h-screen w-full bg-[url('/background_cinema.jpeg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/40 z-0" />
          <NavBar />
          <Banner />
        </div>
        <SecaoPosters />
        <SecaoRecomendacoes />
      </main>
    </>
  );
}

export default App;
