import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  // Création State du Add counter --------------------
  const [addCounter, setAddCounter] = useState([<Counter key={0} />]);

  // Gestionnaire du Add counter ------------------
  const handleAdd = (event) => {
    // Réaliser une copie en surface (le 1er niveau) de addCounter
    const newCounter = [...addCounter];
    // Vérifier si addCounter est inférieur à 3
    if (addCounter.length < 3) {
      // Si true, ajouter un nouveau composant Counter avec une nouvelle clé dans la copie
      newCounter.push(<Counter key={addCounter.length + 1} />);
      // Mettre à jour addCounter avec la copie en valeur
      return setAddCounter(newCounter);
    }
  };

  // Rendu -----------------------
  return (
    <>
      <Header />
      <main className="container">
        <section>
          {/* AJouter un nouveau composant Counter */}
          <button className="btn-add-counter" onClick={handleAdd}>
            Add Counter
          </button>
          <div className="counters">{addCounter}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
