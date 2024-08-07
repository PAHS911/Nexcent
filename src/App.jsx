import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Client from "./component/Client";
import Piexl from "./component/Piexl";
import Helping from "./component/Helping";
import Design from "./component/Design";
import Tim from "./component/Tim";
import Marketing from "./component/Marketing";
import Libero from "./component/Libero";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <main className="font-sans">
        <Navbar />
        <section className="px-24 max-xl2:px-2  py-16 bg-[#F1F1F1] max-lx:px-9 max-lg:px-2 max-lg:py-9 ">
          <Hero />
        </section>
        <section className="px-24 max-xl2:px-2  py-9 max-lx:px-9 max-lg:px-2">
          <Client />
        </section>
        <section className="px-24 max-xl2:px-2  py-6 max-lx:px-9 max-lg:px-2">
          <Piexl />
        </section>
        <section className="px-24 max-xl2:px-2  py-9 bg-[#F1F1F1] max-lx:px-9 max-lg:px-2">
          <Helping />
        </section>
        <section className="px-24 max-xl2:px-2  py-9 max-lx:px-9 max-lg:px-2">
          <Design />
        </section>
        <section className="px-24 max-xl2:px-2  py-9 max-lx:px-9 max-lg:px-2">
          <Tim />
        </section>
        <section className="px-24 py-9 max-lx:px-9 max-lg:px-2">
          <Marketing />
        </section>
        <section className="px-24 max-xl2:px-2  py-8 bg-[#F1F1F1] max-lx:px-9 max-lg:px-2">
          <Libero />
        </section>
        <section className="px-24 max-xl2:px-2  py-9 bg-[#263238] max-lx:px-9 max-lg:px-2">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
