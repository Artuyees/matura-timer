import Clock from "./Clock.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-row text-white justify-center h-screen bg-slate-700">
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
