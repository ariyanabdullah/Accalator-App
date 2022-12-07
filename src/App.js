import "./App.css";
import Banner from "./Components/Banner/Banner";
import Boxes from "./Components/Boxes/Boxes";
import Cart from "./Components/Cart/Cart";

import Footer from "./Components/Footer/Footer";
import Frame from "./Components/Frame/Frame";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* navbar */}

      <header>
        <Navbar></Navbar>
      </header>

      <div className="widt mx-auto">
        <section>
          {/* banner */}

          <Banner></Banner>
        </section>

        <section className="mt-16">
          <Frame></Frame>
        </section>

        <section className="mt-16">
          <Cart></Cart>
        </section>
      </div>

      {/* Footer */}

      <section className="mt-24">
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
