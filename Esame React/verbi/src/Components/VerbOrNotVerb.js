import words from "../words.json";
import { useState } from "react";
export default function VerbOrNotVerb() {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [maxScore, setMaxScore] = useState(0); // da fare
  function isVerb(word) {
    let verb = false;
    let end = ["are", "ere", "ire"];
    let wordEnd = word.length - 3;
    // non funziona, errore qui provato substring e slice ma non funziona
    console.log(wordEnd);
    for (let i = 0; i < end.length; i++) {
      if (wordEnd === end[i]) {
        verb = true;
      }
    }
    if (verb) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setCurrentWord(currentWord + 1);
  }
  return (
    <div>
      <div>
        {words.map((word, i) => {
          if (i === currentWord)
            return <span className="words">CURRENT WORD: {word}</span>;
        })}
      </div>
      <br></br>
      <div className="buttons">
        <button className="verb" onClick={isVerb}>
          VERB
        </button>
        <button className="notaverb" onClick={isVerb}>
          NOT A VERB
        </button>
      </div>
      <p className="score">SCORE: {score}</p>
      <p className="maxscore">MAX SCORE: {maxScore}</p>
    </div>
  );
}
