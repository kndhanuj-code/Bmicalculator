import React, { useState } from 'react';

const Game = () => {
  const choices = ["stone", "paper", "scissor"];

  const [round, setRound] = useState(1);
  const [results, setResults] = useState([]);
  const [final, setFinal] = useState("");

  function play(userChoice) {
    if (round > 3) return;

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (userChoice === computerChoice) result = "Draw";
    else if (
      (userChoice === "stone" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "stone") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) result = "You Win";
    else result = "Computer Wins";

    const newRound = {
      round: round,
      user: userChoice,
      comp: computerChoice,
      result: result
    };

    const updated = [...results, newRound];
    setResults(updated);

    if (round === 3) calculateFinal(updated);
    setRound(round + 1);
  }

  function calculateFinal(list) {
    let user = 0, comp = 0;

    list.forEach(r => {
      if (r.result === "You Win") user++;
      if (r.result === "Computer Wins") comp++;
    });

    if (user > comp) setFinal("You Won the Game!");
    else if (comp > user) setFinal("Computer Won the Game!");
    else setFinal("Match Draw!");
  }

  function playAgain() {
    setRound(1);
    setResults([]);
    setFinal("");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stone Paper Scissor</h2>

      {round <= 3 && final === "" && (
        <>
          <p>Round {round} of 3</p>
          <button onClick={() => play("stone")}>Stone</button>
          <button onClick={() => play("paper")}>Paper</button>
          <button onClick={() => play("scissor")}>Scissor</button>
        </>
      )}
      {/* <P>Round {round} of 3 </P> */}
      

      <h3>Round Results:</h3>
      {results.map((r) => (
        <p key={r.round}>
          Round {r.round} → You: {r.user}, Comp: {r.comp} → {r.result}
        </p>
      ))}

      {final && (
        <>
          <h2>{final}</h2>
          <button onClick={playAgain}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default Game;









{/* <table border="1" width="100%" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr> 
            <th>Date</th>
            <th>Category</th>
            <th>Name</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e, index) => (
            <tr key={index}>
              <td>{e.date}</td>
              <td>{e.category}</td>
              <td>{e.name}</td>
              <td>{e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table> */}