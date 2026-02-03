import React , {useState} from 'react'



const Joke = () => {
let jokes = [
    { id: 1, joke: "Why don’t programmers like nature? Too many bugs!" },
    { id: 2, joke: "Why do Java developers wear glasses? Because they dont C#." },
    { id: 3, joke: "I told my computer I needed a break, and it said 'No problem — I'll go to sleep'." },
    { id: 4, joke: "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!" },
    { id: 5, joke: "Debugging: Being the detective in a crime movie where you are also the murderer." },
    { id: 6, joke: "Why did the React component get a job? It wanted to render some income!" },
    { id: 7, joke: "Why was the function sad? It didnt get a return value." },
    { id: 8, joke: "What do you call 8 hobbits? A hobbyte." },
    { id: 9, joke: "Why was the math book sad? It had too many problems." },
    { id: 10, joke: "Parallel lines have so much in common. Its a shame they will never meet." }
  ];

  let colors = ["lightblue", "lightgreen", "lightpink", "lavender", "khaki", "skyblue", "peachpuff", "lightyellow"];

  let [joke, setJoke] = useState(jokes[0]);
  let [bgColor, setBgColor] = useState("white");

  function generateRandom() {
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
     
    setJoke(randomJoke);
    setBgColor(randomColor);
  }

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      
    }}>
      <h2>{joke.joke}</h2>
      <button onClick={generateRandom} style={{ padding: "10px", marginTop: "20px" }}>
        Show Random Joke
      </button>
    </div>
  );
}

export default Joke
