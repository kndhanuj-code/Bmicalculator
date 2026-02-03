import React, { useReducer , useEffect } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "JSX stands for?",
    options: ["Java XML", "JavaScript XML", "JSON XML", "None"],
    answer: "JavaScript XML",
  },
  {
    question: "Which is used to pass data to component?",
    options: ["state", "props", "setState", "render"],
    answer: "props",
  },
  {
    question: "React is developed by?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
];

const initialState = {
  currentIndex: 0,
  selectedOption: "",
  score: 0,
  timeLeft: 30,
  showResult: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

       case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "NEXT_QUESTION":
      const isCorrect =state.selectedOption === action.payload.answer;

      const isLastQuestion = state.currentIndex + 1 === action.payload.total;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentIndex: isLastQuestion ? state.currentIndex: state.currentIndex + 1,
        selectedOption: "",
        showResult: isLastQuestion,
        timeLeft: 30,
      };

    case "RESTART":
      return initialState;

    default:
      return state;
  }
};

const QuizApp = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const { currentIndex, selectedOption, score, showResult } = state;
  useEffect(() => {
  if (state.showResult) return;

  if (state.timeLeft === 0) {
    dispatch({
      type: "NEXT_QUESTION",
      payload: {
        answer: questions[state.currentIndex].answer,
        total: questions.length,
      },
    });
    return;
  }

  const timer = setInterval(() => {
    dispatch({ type: "TICK" });
  }, 1000);

  return () => clearInterval(timer);
}, [state.timeLeft, state.showResult]);


  return (
    <div >
      {!showResult ? (
        <>
          <h3>
            Question {currentIndex + 1} / {questions.length}
          </h3>
          

          <h4>{questions[currentIndex].question}</h4>


          {questions[currentIndex].options.map((opt, index) => (
            <div key={index}>
              <input type="radio"
                name="option"
                value={opt}
                checked={selectedOption === opt}
                onChange={() =>
                  dispatch({
                    type: "SELECT_OPTION",
                    payload: opt,
                  })
                }
              />
              {opt}
            </div>
          ))}

          <br />

          <button
            onClick={() =>
              dispatch({
                type: "NEXT_QUESTION",
                payload: {
                  answer: questions[currentIndex].answer,
                  total: questions.length,
                },
              })
            }
            disabled={!selectedOption}
          >
            Next
          </button>
           <h3 style={{color:'red'}}> Time Left: {state.timeLeft}s</h3>

        </>
      ) : (
        <>
          <h2>Quiz Finished </h2>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>

          <button
            onClick={() => dispatch({ type: "RESTART" })}
            style={{ marginTop: "10px" }}
          >
            Restart Quiz 
          </button>
        </>
      )}
    </div>
  );
};

export default QuizApp;
