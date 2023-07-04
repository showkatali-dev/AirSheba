function App() {
  return (
    <div className="min-h-screen before:hidden md:before:block before:absolute before:content-[''] before:-left-40 before:top-8 before:w-72 before:h-72 before:rounded-full before:bg-conic before:from-primary before:to-primary before:blur-[80px] before:opacity-20 before:-z-10 after:absolute after:content-[''] after:top-1/2 after:left-1/2 after:w-32 after:h-32 after:rounded-full after:bg-conic after:from-orange-500 after:to-orange-600 after:blur-[100px] after:opacity-30 after:-z-10">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">Button Text</span>
      </a>
    </div>
  );
}

export default App;
