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
        <p>Er personen{fact.replace('_', ' ')}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Ja</button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>Nej</button>
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.mand === null) {
      return askQuestion(' en mand');
    }

    if (facts.programmering === null) {
      return askQuestion(' underviser i programmering');
    }

    if (facts.react === null) {
      return askQuestion(' underviser i react');
    }

    let diagnosis = '';
    let conclusion = 'Based on the facts: ';

    if (facts.mand === "Yes" && facts.programmering === "Yes" && facts.react === "Yes") {
      diagnosis = 'Personen er Morten';
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
