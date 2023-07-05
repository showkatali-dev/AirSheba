import FilterBar from "./components/FilterBar/FilterBar";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="min-h-screen before:hidden md:before:block before:fixed before:content-[''] before:-left-40 before:top-8 before:w-72 before:h-72 before:rounded-full before:bg-conic before:from-primary before:to-primary before:blur-[80px] before:opacity-20 before:-z-10 after:fixed after:content-[''] after:top-1/2 after:left-1/2 after:w-32 after:h-32 after:rounded-full after:bg-conic after:from-primary/90 after:to-primary after:blur-[100px] after:opacity-30 after:-z-10">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 xl:px-12 py-12">
        <SearchBar />
        <div className="md:grid md:grid-cols-3 mt-12 space-y-12 md:space-x-12">
          <FilterBar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
