import { useState } from 'react';

export default function League() {
  // Knowledge base
  const [facts, setFacts] = useState({
    ucl: null,
    premier: null,
    tysk: null,
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p>Har dit hold en {fact.replace('_', ' ')}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.ucl === null) {
      return askQuestion('ucl');
    }

    if (facts.premier === null) {
      return askQuestion('premier');
    }

    if (facts.tysk === null) {
      return askQuestion('tysk');
    }

    let diagnosis = '';
    let conclusion = 'Based on the facts: ';

    if (facts.ucl === "Yes" && facts.premier === "Yes") {
      diagnosis = 'Dit hold kan være Manchester City';
      conclusion += 'UCL og Premier League';
    } else if (facts.ucl === "Yes" && facts.premier === "No" && facts.tysk === "Yes") {
      diagnosis = 'Dit hold kan være Bayern München';
      conclusion += 'UCL, ikke Premier League, og tysk';
    } else if (facts.ucl === "Yes" && facts.tysk === "No") {
      diagnosis = 'Dit hold kan være Real Madrid';
      conclusion += 'UCL, ikke Premier League, og ikke tysk';
    } else if (facts.premier === "Yes") {
      diagnosis = 'Dit hold kan være Leicester';
      conclusion += 'Premier League';
    } else {
      diagnosis = 'Dit holds tilstand kan ikke bestemmes baseret på de nuværende oplysninger.';
      conclusion += 'ingen UCL, Premier League, eller tysk.';
    }

    return (
      <div>
        <p>{diagnosis}</p>
        <p>{conclusion}</p>
        <button onClick={() => setFacts({ ucl: null, premier: null, tysk: null })}>
          Start forfra
        </button>
      </div>
    );
  };

  return (
    <div>
      {forwardChain()}
    </div>
  );
}
