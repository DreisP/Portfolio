import Header from "./Header.jsx";
import Experience from "./Experience.jsx";
import TechStack from "./TechStack.jsx";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* Geruite achtergrond – blijft vast tijdens scrollen */}
      <div className="fixed inset-0 -z-20 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]" />

      {/* Radiale maskering – fade naar wit */}
      <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Centrale container */}
      <div className="max-w-[80rem] mx-auto px-4">
        <Header />
        <Experience />
        <TechStack />
      </div>

    </div>
  );
}

export default App;
