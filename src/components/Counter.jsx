import { useState } from "react";

export default function Counter() {
  // Création du state counter -------------------
  const [counter, setCounter] = useState({
    more: "+",
    less: "-",
    result: 0,
  });

  //Gestionnaire de counter --------------------
  const handleCounter = (identifier, event) => {
    // Faire une copie de la valeur du state
    const newCounter = { ...counter };
    // Si "more", modifier la copie et mettre à jour le state avec la copie en valeur
    if (identifier === "more") {
      newCounter.result += 1;
      return setCounter(newCounter);
      // Si "less", modifier la copie et mettre à jour le state avec la copie en valeur
    } else if (identifier === "less") {
      newCounter.result -= 1;
      return setCounter(newCounter);
      // Si c'est le bouton reset, modifier la copie à "0" pour "result" et mettre à jour le state avec la copie en valeur
    } else {
      newCounter.result = 0;
      return setCounter(newCounter);
    }
  };
  // Rendu ---------------------
  return (
    <section>
      <div>
        {counter.result > 0 && (
          <div onClick={(event) => handleCounter("less", event)}>
            {counter.less}
          </div>
        )}

        <div>{counter.result}</div>
        {counter.result < 10 && (
          <div onClick={(event) => handleCounter("more", event)}>
            {counter.more}
          </div>
        )}
      </div>
      <button onClick={(event) => handleCounter("reset", event)}>Reset</button>
    </section>
  );
}
