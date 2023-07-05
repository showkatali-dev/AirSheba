import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen before:hidden md:before:block before:absolute before:content-[''] before:-left-40 before:top-8 before:w-72 before:h-72 before:rounded-full before:bg-conic before:from-primary before:to-primary before:blur-[80px] before:opacity-20 before:-z-10 after:absolute after:content-[''] after:top-1/2 after:left-1/2 after:w-32 after:h-32 after:rounded-full after:bg-conic after:from-orange-500 after:to-orange-600 after:blur-[100px] after:opacity-30 after:-z-10">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 xl:px-12 py-12">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
