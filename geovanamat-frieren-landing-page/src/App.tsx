import NavBar from "./components/ui/NavBar";
import Banner from "./components/ui/Banner";
import SecaoGaleria from "./components/ui/SecaoGaleria";
import SecaoPersonagens from "./components/ui/SecaoPersonagens";

function App() {
  return (
    <>
      <main className="w-full m-0 p-0">
        <div className="flex flex-col pt-20 h-screen w-full bg-[url('/background.jpeg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/20 z-0" />
          <NavBar />
          <Banner />
        </div>
        <SecaoGaleria />
        <SecaoPersonagens />
      </main>
    </>
  );
}

export default App;