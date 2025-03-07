import { useState } from 'react';
import leaf from "../assets/leaf.jpg";
import backward from "../assets/backward.jpg";

export default function BackwardChain() {

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
  const backwardChain = (goal) => {
    let conclusions = [];

    if (goal === 'fungal_infection') {

      if (facts.yellow_leaves === null) {
        return askQuestion('yellow_leaves');
      }
      conclusions.push(`yellow leaves: ${facts.yellow_leaves}`);

      if (facts.spots === null && facts.yellow_leaves === "Yes") {
        return askQuestion('spots');
      }
      conclusions.push(`spots: ${facts.spots}`);

      if (facts.yellow_leaves=="Yes" && facts.spots==="Yes") {
        return (
          <div>
            <p>CONCLUSION: The plant HAS a fungal infection.</p>
            <p>Based on the facts:</p>
            <ul>
              {conclusions.map((fact, index) => fact.includes('null') ? null : (
              <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        );
      } 
    }

    // If criteria is not met, show this
      return (
        <div>
          <p>CONCLUSION: The plant does NOT have a fungal infection.</p>
          <p>Based on the facts:</p>
          <ul>
            {conclusions.map((fact, index) => fact.includes('null') ? null : (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      );
  };

  // This is the "diagnosis" that can be confirmed:
  const goal = 'fungal_infection';

  return (
    <div>
      <h1>Backward Chaining: Plant Disease Diagnosis</h1>
      <p>Does your plant have a <span style={{backgroundColor: "yellow"}}>{goal.replace('_', ' ')}</span>?</p>
      {backwardChain(goal)}
      <img src={leaf} alt="image" style={{marginTop: "25px", width: "250px"}}/>
      <img src={backward} alt="image" style={{marginTop: "25px", display: "block"}}/>
    </div>
  );
}
