import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <Header />
      <section id="logements-container">
        <h2>Les Logements !</h2>
        <nav id="logements">
          <ul>
            <li>
              <Link to={`/fiche-logement/1`}>Logement 1</Link>
            </li>
            <li>
              <Link to={`/fiche-logement/2`}>Logement 2</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Footer />
    </>
  );
}