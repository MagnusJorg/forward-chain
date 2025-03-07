import { useState } from 'react';
import leaf from "../assets/leaf.jpg";
import forward from "../assets/forward.jpg";

export default function ForwardChain() {

  // Knowledge base
  const [facts, setFacts] = useState({
    yellow_leaves: null,
    spots: null,
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p>Does the plant have {fact.replace('_', ' ')}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.yellow_leaves === null) {
      return askQuestion('yellow_leaves');
    }

    if (facts.spots === null) {
      return askQuestion('spots');
    }

    let diagnosis = '';
    let conclusion = 'Based on the facts: ';

    if (facts.yellow_leaves==="Yes" && facts.spots==="Yes") {
      diagnosis = 'The plant has a fungal infection.';
      conclusion += 'yellow leaves and spots.';
    } else if (facts.yellow_leaves==="Yes") {
      diagnosis = 'The plant has a nutrient deficiency.';
      conclusion += 'yellow leaves.';
    } else if (facts.spots==="Yes") {
      diagnosis = 'The plant has a pest infestation.';
      conclusion += 'spots.';
    } else {
      diagnosis = 'The plant\'s condition cannot be determined based on the current information.';
      conclusion += 'no yellow leaves or spots.';
    }

    return (
      <div>
        <p>{diagnosis}</p>
        <p>{conclusion}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Forward Chaining: Plant Disease Diagnosis</h1>
      {forwardChain()}
      <img src={leaf} alt="image" style={{marginTop: "25px",width: "250px"}}/>
      <img src={forward} alt="image" style={{marginTop: "25px",display: "block"}}/>
    </div>
  );
}
