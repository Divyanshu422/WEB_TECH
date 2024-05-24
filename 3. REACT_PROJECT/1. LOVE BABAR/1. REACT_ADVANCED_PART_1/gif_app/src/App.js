import Random from "./components/Random";
import Tags from "./components/Tags";
function App() {
  return (
   <div className = "flex flex-col background h-screen w-screen items-center">
      {/* Top level heading */}
      <h1 className ="bg-white text-center py-2 w-10/12 mx-auto
      text-3xl font-bold rounded-xl my-10 shadow-sm">Random GIFS</h1>
      <div className="flex w-screen">
        <Random />
        <Tags />
      </div>
   </div>
  );
}

export default App;
