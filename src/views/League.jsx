import { useState } from 'react';

export default function League() {
  // Knowledge base
  const [facts, setFacts] = useState({
    mand: null,
    programmering: null,
    react: null,
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p>Er personen{fact.replace('_', ' ')}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
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
      conclusion += 'Det er en Mand, han underviser i programmering sproget react.';
    } else if (facts.mand === "Yes" && facts.programmering === "No") {
      diagnosis = 'Din person er Sergio';
      conclusion += 'Det er en mand der ikke underviser i programmering';
    } else if (facts.mand === "Yes" && facts.programmering === "yes" && facts.react === "No" ) {
      diagnosis = 'Din person er Per';
      conclusion += 'UCL, ikke Premier League, og ikke tysk';
    } else {
      diagnosis = 'Dit holds tilstand kan ikke bestemmes baseret på de nuværende oplysninger.';
      conclusion += 'ingen UCL, Premier League, eller tysk.';
    }

    return (
      <div>
        <p>{diagnosis}</p>
        <p>{conclusion}</p>
        <button onClick={() => setFacts({ programmering: null, mand: null, react: null })}>
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
