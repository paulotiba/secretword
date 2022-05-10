// import logo from './logo.svg';
// css
import './App.css';
// React
import { useCallback, useEffect, useState } from "react"
// Data
import { words, wordsList } from './data/WordList';

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)


  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])



  const pickWordAndCategory = () => {
    // pegar categotia aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor( Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pegar palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {word, category}



  }


// start do jogo
  const startGame = () => {
    // pick word and pick category
    const { word, category } =  pickWordAndCategory()
    // separar em letras as palavras
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)


    // setar os estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)



    setGameStage(stages[1].name)
  }


  // vereficar letter 

  const verifyLetter = () => {
    setGameStage(stages[2].name)

  }

  // restarst do jogo reinicia o jogo

  const retry = () => {
    setGameStage(stages[0].name)
  }

  



  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver  retry={retry}/>}
    </div>
  );
}

export default App;
