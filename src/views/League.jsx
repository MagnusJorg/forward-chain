import { useState } from 'react';

export default function League() {
  // Knowledge base - initialize with the correct properties
  const [facts, setFacts] = useState({
    mand: null,
    programmering: null,
    react: null,
    ux: null,
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    // Format the question based on the fact
    let question = '';
    if (fact === 'mand') {
      question = ' en mand';
    } else if (fact === 'ux') {
      question = ' underviser i ux';
    } else if (fact === 'programmering') {
      question = ' underviser i programmering';
    } else if (fact === 'react') {
      question = ' underviser i react';
    }

    return (
      <div key={fact}>
        <p>Er personen{question}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Ja</button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>Nej</button>
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.mand === null) {
      return askQuestion('mand');
    }

    if (facts.mand === "Yes") {
      if (facts.programmering === null) {
        return askQuestion('programmering');
      }

      if (facts.programmering === "Yes" && facts.react === null) {
        return askQuestion('react');
      }
    } else if (facts.mand === "No") {
      if (facts.ux === null) {
        return askQuestion('ux');
      }
    }

    let diagnosis = '';
    let conclusion = 'Based on the facts: ';

    if (facts.mand === "Yes" && facts.programmering === "Yes" && facts.react === "Yes") {
      diagnosis = 'Personen er Morten';
      conclusion += 'Det er en Mand, han underviser i programmering sproget react.';
    } else if (facts.mand === "Yes" && facts.programmering === "No") {
      diagnosis = 'Din person er Sergio';
      conclusion += 'Det er en mand der ikke underviser i programmering';
    } else if (facts.mand === "Yes" && facts.programmering === "Yes" && facts.react === "No") {
      diagnosis = 'Din person er Per';
      conclusion += 'Det er en mand der underviser i programmering, men ikke i react.';
    } else if (facts.mand === "No" && facts.ux === "Yes") {
      diagnosis = 'Din person er Jeane';
      conclusion += 'Det er en kvinde der underviser i ux';
    } else if (facts.mand === "No" && facts.ux === "No") {
      diagnosis = 'Din person er Christina';
      conclusion += 'Det er en kvinde der ikke underviser i ux';
    } else {
      diagnosis = 'Din person kan ikke bestemmes baseret på de nuværende oplysninger.';
      conclusion += 'De givne oplysninger passer ikke med nogen kendt person.';
    }

    return (
      <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
        <p>{diagnosis}</p>
        <p>{conclusion}</p>
        <button onClick={() => setFacts({ mand: null, programmering: null, react: null, ux: null })}>
          Start forfra
        </button>
      </div>
    );
  };

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "40px", justifyContent: "center", alignItems: "center", maxWidth:"400px"}}>
      {forwardChain()}
    </div>
  );
}